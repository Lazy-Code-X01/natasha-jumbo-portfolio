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
  // true only when the client itself isn't identified yet (not just when
  // copy needs polish) — drives the "slot open" styling in Work.tsx.
  isPlaceholder?: boolean;
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
  isPlaceholder?: boolean;
};

export type Philosophy = {
  quote: string;
  attribution: string;
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
  attribution: "CEO, CaveDwellerZ",
};

// PSHAN and NJ Creative Firm are confirmed real clients — copy/year still
// TODO. The two "Client Placeholder" entries mark open slots with no client
// identified yet (isPlaceholder: true). To add a real project, either fill
// in an open slot or push a new { tag, title, description, year? } object;
// no component changes needed either way.
export const workProjects: WorkProject[] = [
  {
    tag: "Brand & Digital",
    title: "PSHAN",
    description:
      "Placeholder description of the PSHAN engagement — scope, approach, and outcome go here once confirmed.",
    year: "TODO",
    imageUrl: "/placeholders/work-1.svg",
  },
  {
    tag: "Agency",
    title: "NJ Creative Firm",
    description:
      "Placeholder description of NJ Creative Firm as a project/case study — replace with real narrative and results.",
    year: "TODO",
    imageUrl: "/placeholders/work-2.svg",
  },
  {
    tag: "Brand & Management",
    title: "Client Placeholder 03",
    description: "Real client details pending — to be added shortly.",
    isPlaceholder: true,
  },
  {
    tag: "Brand & Management",
    title: "Client Placeholder 04",
    description: "Real client details pending — to be added shortly.",
    isPlaceholder: true,
  },
];

// TODO: confirm real numbers before launch.
export const stats: Stat[] = [
  { number: "10", label: "Years in practice" },
  { number: "TODO", label: "Brands built" },
  { number: "TODO", label: "Awards" },
  { number: "TODO", label: "Team members" },
];

// TODO: replace with real speaking/hosting moments (title, year, image) as
// they're confirmed — fill in an open slot or push a new entry; no component
// changes needed either way. Intentionally small — On Stage is an accent
// strip, not a full highlight reel.
export const speakingHighlights: SpeakingHighlight[] = [
  { title: "Speaking moment 01", year: "TODO", isPlaceholder: true },
  { title: "Speaking moment 02", year: "TODO", isPlaceholder: true },
  { title: "Speaking moment 03", year: "TODO", isPlaceholder: true },
  { title: "Speaking moment 04", year: "TODO", isPlaceholder: true },
];

export const philosophy: Philosophy = {
  quote:
    "A brand, like a room, isn't won by being loudest — it's won by whoever makes people feel most seen.",
  attribution: "Natasha Jumbo",
};

export const intro = {
  professional:
    "Natasha leads NJ Creative Firm as CEO, building brand systems that move companies from visibility to authority. With a background in Mass Communication and certifications across brand management, digital marketing, and data analysis, she's repositioned 15+ brands and led strategies contributing to ₦500M+ in portfolio investment value.",
  speaking:
    "Beyond the boardroom, Natasha hosts and moderates conversations — from panels to keynote fireside chats — that shape how brands show up in public. She brings the same clarity, command, and structure to a stage that she brings to a strategy deck, treating every appearance as an extension of the brand itself.",
};

export const contact = {
  ctaLabel: "Start a project",
  ctaHref: "mailto:hello@example.com",
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
    { label: "Email", href: "mailto:hello@example.com" },
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
