const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "focus"],
    borderColor: ["focus", "hover"],
    extend: {},
  },
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
    textShadow: {
      default: "0 2px 0 #000",
      md: "0 2px 2px #000",
      h2: "0 0 3px #FF0000, 0 0 5px #0000FF",
      h1: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
    },
    fontSize: {
      2: "1.563rem",
      3: "1.953rem",
      4: "2.441rem",
      5: "3.052rem",
      6: "4rem",
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      brightness: {
        90:'.90',
        80:'.80',
        70:'.70',
        60:'.60',
        25: '.25',
        175: '1.75',
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(1, 0.02, 1, 0.02)",
        "out-expo": "cubic-bezier(0.02,1,0.02,1)",
      },
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      maxHeight: {
        128: "32rem",
      },
      transitionDuration: {
        0: "0ms",
        1000: "1000ms",
        2000: "2000ms",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      textShadow: {
        "2xl": "1px 1px 5px rgb(33 34 43 / 20%)",
        "3xl": "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      },
      opacity: {
        10: ".1",
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        Gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
    },
  },
  plugins: [],
};
