/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Draft (sample, not-yet-approved) testimonials show locally and on
    // Vercel preview deployments for review, but never on production.
    SHOW_DRAFT_TESTIMONIALS:
      process.env.VERCEL_ENV === "production" ? "" : "1",
  },
};

export default nextConfig;
