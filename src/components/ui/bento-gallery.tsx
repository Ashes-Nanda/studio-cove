import { useRef } from "react";

interface BentoCellProps {
  src: string;
  alt: string;
  aspect: string;
  className?: string;
  objectPosition?: string;
}

function BentoCell({ src, alt, aspect, className = "", objectPosition = "center" }: BentoCellProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    img.style.transform = `scale(1.06) translate(${dx * -14}px, ${dy * -14}px)`;
    img.style.filter = "brightness(1.05)";
  }

  function handleMouseLeave() {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = "scale(1.0) translate(0px, 0px)";
    img.style.filter = "brightness(0.9)";
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden cursor-pointer ${aspect} ${className}`}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out brightness-90"
        style={{ objectPosition }}
      />
    </div>
  );
}

interface BentoGalleryProps {
  images: { src: string; alt: string; objectPosition?: string }[];
}

export function BentoGallery({ images }: BentoGalleryProps) {
  const [i1, i2, i3, i4, i5] = images;

  return (
    <section className="py-24 px-6 bg-ink">
      <div className="max-w-7xl mx-auto space-y-2">

        {/* Row 1: portrait (3:4 at 4/12) + landscape (3:2 at 8/12) — same height */}
        <div className="grid grid-cols-12 gap-2 items-start">
          <BentoCell src={i1.src} alt={i1.alt} objectPosition={i1.objectPosition}
            aspect="aspect-[3/4]" className="col-span-12 md:col-span-4" />
          <BentoCell src={i2.src} alt={i2.alt} objectPosition={i2.objectPosition}
            aspect="aspect-[3/2]" className="col-span-12 md:col-span-8" />
        </div>

        {/* Row 2: three portrait (2:3) */}
        <div className="grid grid-cols-12 gap-2 items-start">
          <BentoCell src={i3.src} alt={i3.alt} objectPosition={i3.objectPosition}
            aspect="aspect-[2/3]" className="col-span-12 md:col-span-4" />
          <BentoCell src={i4.src} alt={i4.alt} objectPosition={i4.objectPosition}
            aspect="aspect-[2/3]" className="col-span-12 md:col-span-4" />
          <BentoCell src={i5.src} alt={i5.alt} objectPosition={i5.objectPosition}
            aspect="aspect-[2/3]" className="col-span-12 md:col-span-4" />
        </div>

      </div>
    </section>
  );
}
