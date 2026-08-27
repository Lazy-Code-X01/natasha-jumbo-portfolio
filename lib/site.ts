// Vercel automatically sets VERCEL_PROJECT_PRODUCTION_URL to the project's
// production domain (no protocol, no trailing slash) — using it here means
// sitemap/robots/metadata resolve correctly on deploy with zero manual
// config, and fall back to localhost for local dev.
export function getBaseUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
