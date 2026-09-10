// Must match the key used in the blocking inline script in app/layout.tsx —
// that script can't import this constant (it runs as a raw string before
// any JS bundle loads), so the literal is duplicated there deliberately.
export const THEME_STORAGE_KEY = "natasha-portfolio-theme";

export type Theme = "dark" | "light";
