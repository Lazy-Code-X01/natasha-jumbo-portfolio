// TODO: Placeholder content for Phase 1 scaffolding.
// Swap every value here for real copy/assets before launch — types are
// structured so new entries (projects, speaking highlights, stats) can be
// appended without touching component code.

export type HeroContent = {
  name: string;
  role: string;
  greeting: string;
  imageUrl: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
};

export type WorkProject = {
  tag: string;
  title: string;
  description: string;
  year?: string;
  // Omit for open slots (isPlaceholder: true) — those render a dashed
  // "open slot" box instead of an image, never a fabricated visual.
  imageUrl?: string;
  // "cover" (default) fills the frame — for a real project screenshot/photo.
  // "contain" for a client logo mark, so it never gets cropped.
  imageFit?: "contain" | "cover";
  // true only when the client itself isn't identified yet (not just when
  // copy needs polish) — drives the "slot open" styling in Work.tsx.
  isPlaceholder?: boolean;
  // If set, the whole card links out to the client's site (new tab).
  url?: string;
};

export type Stat = {
  number: string;
  label: string;
};

export type SpeakingHighlight = {
  title: string;
  year: string;
  // Omit for open slots (isPlaceholder: true) — those render a dashed
  // "coming soon" box instead of an image, never a fabricated photo.
  imageUrl?: string;
  // Tailwind object-position class (e.g. "object-left") — these crop to a
  // square, so a wide multi-person photo may need a non-center crop to
  // keep Natasha in frame. Defaults to centered (object-center) if omitted.
  imagePosition?: string;
  // If set, the whole card becomes a link (opens in a new tab) — a small
  // play-icon overlay signals it leads to video/external content, e.g. a
  // LinkedIn post, rather than embedding a video player in this strip.
  url?: string;
  isPlaceholder?: boolean;
};

export type Philosophy = {
  quote: string;
  attribution: string;
};

export type Venture = {
  name: string;
  role: string;
  description: string;
  url?: string;
  // All four names are confirmed real — this is just pending the actual
  // logo asset, so it always renders (never the dashed "open slot" look
  // used in Work/OnStage for genuinely unidentified entries).
  imageUrl?: string;
  // "contain" (default) for a logo mark with breathing room; "cover" for
  // a real photo that should fill the frame instead of floating in it.
  imageFit?: "contain" | "cover";
};

export const hero: HeroContent = {
  name: "Natasha Jumbo",
  role: "Brand Strategist & Conference Host",
  greeting: "Hello!",
  imageUrl: "/images/natasha-hero.jpg",
};

export const heroTestimonial: Testimonial = {
  quote:
    "Working with Natasha is so easy! A true master and professional brand strategist with a great sense of design and clarity.",
  attribution: "CEO, caveDwellerz",
};

// PSHAN removed (2026-08-24) — she never actually worked with them, that
// entry was a stale seed from Phase 1 scaffolding. Replaced with Kingres
// Properties, also from her CV. All 4 entries below are now real, CV-backed
// roles with real client logos (2026-08-26) — none are transparent PNGs
// except NJ Creative Firm's, and Kingres's is a wide 2.1:1 wordmark, so all
// four use imageFit: "contain" rather than the cropping "cover" default.
// Sip and Paint.NG (COO) is the one remaining unused CV candidate — good
// option if she wants a 5th card later. To add a project, push another
// { tag, title, description, year? } object; no component changes needed.
export const workProjects: WorkProject[] = [
  {
    tag: "Real Estate & Growth",
    title: "Kingres Properties",
    description:
      "As Senior Brand Manager, drove brand strategy and short-let marketing campaigns achieving 50% revenue growth, while managing 800+ agents across Nigeria.",
    // Role ended in 2026 — no longer current, per user (2026-08-27).
    year: "2024–2026",
    imageUrl: "/images/logo-kingres.jpeg",
    imageFit: "contain",
    url: "https://www.kingresproperties.com",
  },
  {
    tag: "Agency",
    title: "NJ Creative Firm",
    description:
      "As Creative Director, leads a multidisciplinary team delivering 360° brand campaigns across tech, lifestyle, and real estate. Rebranded 8+ companies and integrated AI-driven design workflows, cutting production time by 60%.",
    year: "2023–Present",
    imageUrl: "/images/logo-nj-creative-firm.png",
    imageFit: "contain",
    url: "https://njcreativefirm.com",
  },
  {
    tag: "Fintech & Brand",
    title: "Sytiamo Technology",
    description:
      "As Head of Branding, led a national brand expansion across 28 states, building trust among 20,000+ women entrepreneurs and supporting ₦3.56B+ in loans and ₦450M in investor payouts.",
    year: "2022–2025",
    imageUrl: "/images/logo-sytiamo.png",
    imageFit: "contain",
    url: "https://sytiamo.com",
  },
  {
    tag: "Real Estate & Brand",
    title: "BlueDutch",
    description:
      "As Head of Brand (Real Estate), directed creative and PR strategy for BlueDutch's property portfolio alongside Lerry Blue PR, strengthening investor confidence locally and internationally.",
    year: "2024–2025",
    imageUrl: "/images/logo-bluedutch.png",
    imageFit: "contain",
    url: "https://bluedutchproperty.com",
  },
];

// All from her CV. "Team members" swapped for "States reached" — the CV
// gives a specific headcount nowhere, but does state brand presence expanded
// across 28+ Nigerian states as a headline career stat.
export const stats: Stat[] = [
  { number: "10", label: "Years in practice" },
  { number: "15+", label: "Brands built" },
  { number: "5", label: "Awards" },
  { number: "28+", label: "States reached" },
];

// 3 slots still pending — fill in or push a new entry; no component changes
// needed either way. Intentionally small — On Stage is an accent strip, not
// a full highlight reel.
export const speakingHighlights: SpeakingHighlight[] = [
  {
    title: "Guest speaker at InspireHer",
    year: "TODO",
    imageUrl: "/images/onstage-inspireher.jpg",
    // Wide 3-person panel photo cropped to a square — she's the leftmost
    // panelist, so the crop is pulled left rather than the default center
    // to keep her fully in frame.
    imagePosition: "object-left",
  },
  {
    title: "Presented at InnovateAI Conference",
    // Year read directly off the event backdrop in the photo ("Lagos 2026").
    year: "2026",
    imageUrl: "/images/onstage-innovateai.jpg",
    // Portrait photo — default center crop keeps her fully in frame (only
    // trims top/bottom, no horizontal crop since width = square width).
  },
  {
    title: "Hosted backstage for Jobberman",
    year: "TODO",
    imageUrl: "/images/onstage-jobberman.jpg",
    // Source is already 1:1 (1280x1280) — no crop decisions needed.
  },
  {
    title: "Spoke on Sytiamo Technology",
    year: "TODO",
    imageUrl: "/images/onstage-sytiamo-talk.png",
    // 16:9 video frame cropped to a square — she's right-of-center and a
    // "Natasha Jumbo" name badge sits bottom-left; a center crop clips the
    // badge, so this is shifted left to keep both her and the badge in
    // frame (verified visually against 20/30/40/50%; 30% was the cleanest).
    imagePosition: "object-[30%_50%]",
    url: "https://lnkd.in/p/endv-N2T",
  },
];

export const philosophy: Philosophy = {
  quote:
    "A brand, like a room, isn't won by being loudest; it's won by whoever makes people feel most seen.",
  attribution: "Natasha Jumbo",
};

export const intro = {
  professional:
    "Natasha leads NJ Creative Firm as CEO, building brand systems that move companies from visibility to authority. With a background in Mass Communication and certifications across brand management, digital marketing, and data analysis, she's repositioned 15+ brands and led strategies contributing to ₦500M+ in portfolio investment value.",
  speaking:
    "Beyond the boardroom, Natasha hosts and moderates conversations, from panels to keynote fireside chats, that shape how brands show up in public. She brings the same clarity, command, and structure to a stage that she brings to a strategy deck, treating every appearance as an extension of the brand itself.",
};

// Spelling "caveDwellerz" confirmed against the actual logo wordmark
// (lowercase "cave" + capital "D" + lowercase "z") — resolves the earlier
// flagged inconsistency between "CaveDwellerZ" and "CaveDwellerz". SABIQ
// confirmed (in-dev ecosystem product, see project memory for the fuller
// framework doc). All four entries now have real names, roles, images, and
// descriptions — nothing left TODO in this array.
export const ventures: Venture[] = [
  {
    name: "NJ Creative Firm",
    role: "Founder & CEO",
    description:
      "A creative agency delivering premium web development, branding, and digital marketing.",
    imageUrl: "/images/logo-nj-creative-firm.png",
    url: "https://njcreativefirm.com",
  },
  {
    name: "CJI College",
    role: "Founder",
    description:
      "A charity school providing free, quality education to children in need.",
    imageUrl: "/images/cji-college.jpg",
    imageFit: "cover",
  },
  {
    name: "SABIQ",
    role: "Founder",
    description:
      "A digital ecosystem connecting founders, professionals, mentors, and service providers, currently in development.",
    imageUrl: "/placeholders/sabiq-placeholder.svg",
    imageFit: "cover",
  },
  {
    name: "caveDwellerz",
    role: "Director",
    description:
      "A global creative fellowship preserving culture through authentic expression.",
    imageUrl: "/images/logo-cavedwellerz.png",
  },
];

export const contact = {
  ctaLabel: "Start a project",
  ctaHref: "mailto:natashaifeomajumbo@gmail.com",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/iamnatashajumbo?igsh=MWVuZXB1YzMycjkwcA%3D%3D&utm_source=qr",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/natasha-jumbo?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    { label: "Substack", href: "https://substack.com/@natashajumbo?invite" },
    { label: "Behance", href: "https://www.behance.net/natasha-jumbo" },
    { label: "Email", href: "mailto:natashaifeomajumbo@gmail.com" },
  ],
};

export const nav = {
  logo: "N. Jumbo",
  links: [
    { label: "Work", href: "#work" },
    { label: "On Stage", href: "#on-stage" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get in touch", href: "#contact" },
};
