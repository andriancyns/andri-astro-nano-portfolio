import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Uncut Sans", ...defaultTheme.fontFamily.sans],
        sansLight: ["Uncut Sans Light", ...defaultTheme.fontFamily.sans],
        sansRegular: ["Uncut Sans Regular", ...defaultTheme.fontFamily.sans],
        sansMedium: ["Uncut Sans Medium", ...defaultTheme.fontFamily.sans],
        sansSemiBold: ["Uncut Sans SemiBold", ...defaultTheme.fontFamily.sans],
        sansBold: ["Uncut Sans Bold", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
