import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: "var(--font-space-grotesk)",
        baiJamjuree: "var(--font-bai-jamjuree)",
      },
      colors: {
        appBlue100: "#002149",
        appBlue200: "#16A5F5",
        appBlue300: "#005DCC1A",
        appBlue400: "#003473",
        appDarkBlue100: "#001731",
        appDarkBlue200: "#011428",
        appDarkBlue300: "#011229",
        appDarkBlue400: "#000A15",
        appGray100: "#C5C5C5",
        appGray200: "#E6F1FF",
        appGray300: "#929292",
        appGreen100: "#52E03B",
        appGreen200: "#34C759",
        appLightBlue100: "#3381E163",
        appLightBlue200: "#0074FF",
        appLightGray100: "#FFFFFF1A",
        appRed100: "#D34E4E",
        appRed200: "#FFEAE9",
        appRed300: "#D32F2F",
        appWhite200: "#FEFEFE",
        appYellow100: "#FAA02E",
        appYellow200: "#664723",
        appYellow300: "#F7931B",
        appYellow400: "#F8D138",
        appYellow500: "#FFCC00",
        appYellow600: "#8D7A2B6B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        textShadow: "0px 4px 4px 0px #00000040",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
