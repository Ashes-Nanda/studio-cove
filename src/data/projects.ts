import kirikStreet from "../assets/kirik-street.jpg";
import kirikSquad from "../assets/kirik-squad.jpg";
import kirikAuto from "../assets/kirik-auto.jpg";
import kirikPoster from "../assets/kirik-poster.jpg";
import dyskoRoom from "../assets/dysko-room.jpg";
import dyskoImmersive from "../assets/dysko-immersive.jpg";
import kalpaHorse from "../assets/kalpa-horse.jpg";
import kalpaBirds from "../assets/kalpa-birds.jpg";
import kalpaPortrait from "../assets/kalpa-portrait.jpg";
import chinitaChef from "../assets/chinita-chef.jpg";
import chinitaBurrito from "../assets/chinita-burrito.jpg";
import chinitaDrink from "../assets/chinita-drink.jpg";
import chinitaVeganuary from "../assets/chinita-veganuary.jpg";
import fikaPost from "../assets/fika-post.jpg";
import candices from "../assets/candices.jpg";
import candlesBrewhouse from "../assets/candles-brewhouse.jpg";
import muruMuru from "../assets/muru-muru.jpg";
import svashudhi from "../assets/svashudhi.jpg";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  aspect: string;
  scope: string[];
  brief: string;
  direction: string;
  process: string;
  reflection: string;
  results: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
};

export type ArchiveItem = {
  name: string;
  category: string;
  scope: string[];
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "kirik-dosa-chips",
    index: "01",
    title: "Kirik Dosa Chips",
    category: "FMCG",
    year: "2025",
    cover: kirikStreet,
    aspect: "aspect-[4/5]",
    scope: ["Social Media", "Content Creation", "Campaigns"],
    brief:
      "A first-of-its-kind dosa chip brand looking to land in India with the cultural noise of a debut single — not a packaged snack launch.",
    direction:
      "Treat the city as the packaging. Streetside drops, garland moments, auto-rickshaw takeovers, and a recurring cast that made the brand feel inevitable on the feed.",
    process:
      "Concept, casting, production, edit, and community — all run as one continuous content engine. Moment marketing layered on top of a serialised brand world.",
    reflection:
      "FMCG doesn't have to whisper. With the right cast and a sharp script, a snack brand can behave like culture.",
    results: [
      { label: "Format", value: "Serialised" },
      { label: "Hero campaign", value: "I Landed in India" },
      { label: "Channels", value: "IG + Reels" },
    ],
    gallery: [
      { src: kirikStreet, alt: "Streetside drop with Kirik bags" },
      { src: kirikSquad, alt: "Kirik Dosa Squad tee" },
      { src: kirikAuto, alt: "Branded auto-rickshaw" },
      { src: kirikPoster, alt: "In this economy poster" },
    ],
  },
  {
    slug: "dysko",
    index: "02",
    title: "Dysko",
    category: "AI Fashion",
    year: "2025",
    cover: dyskoImmersive,
    aspect: "aspect-[3/4]",
    scope: ["Social Media", "Content Creation"],
    brief:
      "Dysko is a fully immersive AI shopping platform. The brief: make a category-defining tech product feel like a cultural object, not an app demo.",
    direction:
      "Y2K dressing-room energy, mirrored rooms, disco ball lighting. Every post answers a Dysk — the user's exact shopping thought — and lets the product narrate itself.",
    process:
      "Concept-led shoots, an editorial cadence on Reels, and recurring formats like 'Dysks that Hit Different' that turned UX language into watchable content.",
    reflection:
      "The best product launches read like a magazine, not a manual. Dysko earned attention before it asked for downloads.",
    results: [
      { label: "Top reel views", value: "2.1K+" },
      { label: "Voice", value: "Editorial AI" },
      { label: "Format library", value: "Recurring" },
    ],
    gallery: [
      { src: dyskoRoom, alt: "Mirrored dressing room with disco balls" },
      { src: dyskoImmersive, alt: "Fully immersive AI shopping" },
      { src: dyskoRoom, alt: "Y2K set design" },
    ],
  },
  {
    slug: "house-of-kalpa",
    index: "03",
    title: "House of Kalpa",
    category: "Art Gallery",
    year: "2024",
    cover: kalpaBirds,
    aspect: "aspect-[4/5]",
    scope: ["Social Media", "Content Creation", "Production"],
    brief:
      "A contemporary art space built around the work of artist Kalpa Shah. The studio became a recurring character — gallery as personality, not white cube.",
    direction:
      "Soft-light portraiture, intimate vignettes with the work, and a first-person voice that made followers feel introduced to Kalpa, not the brand.",
    process:
      "On-location shoots inside the gallery and studio, paired with a slow editorial rollout designed for collectors and curious passers-by alike.",
    reflection:
      "Art galleries don't need louder marketing — they need a tone that earns the right to be present in someone's feed.",
    results: [
      { label: "Brand voice", value: "First-person" },
      { label: "Format", value: "Editorial" },
      { label: "Audience", value: "Collectors" },
    ],
    gallery: [
      { src: kalpaBirds, alt: "Kalpa Shah with bird sculptures" },
      { src: kalpaPortrait, alt: "Kalpa Shah portrait" },
      { src: kalpaHorse, alt: "House of Kalpa horse sculpture" },
    ],
  },
  {
    slug: "chinita",
    index: "04",
    title: "Chinita Real Mexican Food",
    category: "F&B",
    year: "2024",
    cover: chinitaBurrito,
    aspect: "aspect-[4/5]",
    scope: ["Social Media", "Content Creation"],
    brief:
      "A real Mexican kitchen that needed its social to taste like the food — bright, opinionated, and never another beige F&B feed.",
    direction:
      "A little kick, a lot of flavour. Saturated colour, hands-in-frame food, and recurring formats like 'Spend a Day Out with Chinita' that built a place, not just a menu.",
    process:
      "Monthly shoots covering bar, kitchen, and dining room. Moment marketing — Veganuary, monsoon menus — layered into a consistent visual cadence.",
    reflection:
      "F&B social wins on craving, not aesthetics. We made the page feel like the room.",
    results: [
      { label: "Hero series", value: "Day Out with Chinita" },
      { label: "Campaign", value: "Veganuary the Mexican way" },
      { label: "Format", value: "Hands-in-frame" },
    ],
    gallery: [
      { src: chinitaBurrito, alt: "Burrito bowl with sauteed peppers" },
      { src: chinitaChef, alt: "Chef in Chinita kitchen" },
      { src: chinitaDrink, alt: "Quietly refreshing cocktail" },
      { src: chinitaVeganuary, alt: "Veganuary the Mexican way" },
    ],
  },
  {
    slug: "fika",
    index: "05",
    title: "Fika",
    category: "F&B",
    year: "2024",
    cover: fikaPost,
    aspect: "aspect-[4/5]",
    scope: ["Brand Identity", "Social Media"],
    brief:
      "A new café concept that needed a complete identity — logo, palette, packaging, and a social tone — all built to feel hand-drawn and quietly Scandinavian.",
    direction:
      "Linen and oak. An illustrated visual language with food drawn like a friend would sketch it, paired with restrained typography across every surface.",
    process:
      "Identity, packaging mockups (delivery bag, coffee cup, butter paper), and the launch social system — all anchored to a tight two-tone palette.",
    reflection:
      "A brand identity is finished when nothing else can be added without diluting it. Fika reached that line on the first round.",
    results: [
      { label: "Palette", value: "White Linen / Oak" },
      { label: "Touchpoints", value: "4 + Social" },
      { label: "Voice", value: "Illustrated" },
    ],
    gallery: [
      { src: fikaPost, alt: "Fika illustrated breakfast post" },
      { src: fikaPost, alt: "Fika identity in use" },
      { src: fikaPost, alt: "Fika packaging system" },
    ],
  },
];

export const archive: ArchiveItem[] = [
  { name: "Candice's Gourmet Sandwiches", category: "F&B", scope: ["Social Media", "Content Creation"], cover: candices },
  { name: "Candles Brewhouse", category: "F&B", scope: ["Social Media", "Content Creation"], cover: candlesBrewhouse },
  { name: "The Founder's Brewery", category: "Brewery", scope: ["Social Media", "Content Creation"] },
  { name: "Tentworks Interactive", category: "Gaming", scope: ["Social Media", "Production"] },
  { name: "Toscano", category: "F&B", scope: ["Social Media", "Production"] },
  { name: "Fresh Pressery", category: "F&B", scope: ["Social Media", "Content Creation"] },
  { name: "Lavender", category: "F&B", scope: ["Social Media", "Content Creation"] },
  { name: "Muru Muru", category: "F&B", scope: ["Social Media", "Content Creation"], cover: muruMuru },
  { name: "Svashudhi", category: "Wellness", scope: ["Branding", "Content"], cover: svashudhi },
  { name: "Dragon Draws", category: "Branding", scope: ["Logo", "Branding"] },
  { name: "Worqfit", category: "Branding", scope: ["Branding"] },
  { name: "Kari Coffee", category: "F&B", scope: ["Logo", "Branding", "Packaging"] },
  { name: "Farm Sourced", category: "Branding", scope: ["Logo", "Branding"] },
  { name: "Da'Belly", category: "F&B", scope: ["Branding", "Packaging"] },
  { name: "Trysquare", category: "Flooring", scope: ["Social Media", "Graphic Design"] },
  { name: "Raj Diamonds", category: "Jewelry", scope: ["Campaigns"] },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
