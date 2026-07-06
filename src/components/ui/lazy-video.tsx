import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !video.src) {
          video.src = src;
          video.load();
          const onCanPlay = () => {
            video.play().catch(() => {});
            video.removeEventListener("canplay", onCanPlay);
          };
          video.addEventListener("canplay", onCanPlay);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
