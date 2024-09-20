/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-xs": "var(--bm-font-size-h-xs)",
        "heading-lg": "var(--bm-font-size-h-lg)",
        "heading-2xl": "var(--bm-font-size-h-2xs)",
      },
      colors: {
        background: "var(--bm-color-background)",
        "background-backdrop": "var(--bm-color-background-backdrop)",
        "background-hover": "var(--bm-color-background-hovered)",
        "background-pressed": "var(--bm-color-background-pressed)",
        content: "var(--bm-color-content)",
        "content-on-background": "var(--bm-color-content-on-background)",
        "content-on-background-pressed":
          "var(--bm-color-content-on-background-pressed)",
        "content-subdued": "var(--bm-color-content-subdued)",
        link: "var(--bm-color-link)",
        "link-hovered": "var(--bm-color-link-hovered)",
        topbar: "var(--bm-color-topbar)",
        surface: "var(--bm-color-surface)",
        "surface-neutral": "var(--bm-color-surface-neutral)",
        "action-neutral": "var(--bm-color-action-neutral)",
        "action-neutral-pressed": "var(--bm-color-action-neutral-pressed)",
        "action-neutral-hovered": "var(--bm-color-action-neutral-hovered)",
        line: "var(--bm-color-line)",
        focused: "var(--bm-color-focused)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.content-on-background"),
            blockquote: {
              color: theme("colors.content-on-background"),
            },
            a: {
              color: theme("colors.link"),
            },
            "--tw-prose-bold": theme("colors.content-on-background"),
            "--tw-prose-headings": theme("colors.content-on-background"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class", '[data-mode="dark"]'],
};
