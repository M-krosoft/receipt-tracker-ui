import { createTheme } from "@shopify/restyle";

const palette = {
  darkBlue: "#253659",
  cyan: "#03A696",
  lightCyan: "#04BF9D",
  orange: "#F28157",
  darkOrange: "#BF665E",
  white: "#fffafa",
  transparent: "#00000000",
};

const theme = createTheme({
  colors: {
    mainBackgroundGradientFirst: palette.lightCyan,
    mainBackgroundGradientSecond: palette.cyan,

    textPrimary: palette.white,
    textAccent: palette.orange,

    transparent: palette.transparent,

    buttonPrimary: palette.white,
    buttonPrimaryForeground: palette.orange,

    buttonSecondary: palette.white,
    buttonSecondaryForeground: palette.darkOrange,
  },
  spacing: {
    auto: "auto",
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 56,
    xxxl: 64,
  },
  borderRadii: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },

  textVariants: {
    header1: {
      fontWeight: "bold",
      fontSize: 34,
    },
    header2: {
      fontWeight: "bold",
      fontSize: 28,
    },
    header3: {
      fontWeight: "bold",
      fontSize: 22,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    body3: {
      fontSize: 12,
    },
    buttonPrimary: {
      backgroundColor: "transparent",
      fontWeight: "bold",
      borderRadius: "m",
      color: "buttonPrimary",
      paddingHorizontal: "m",
      paddingVertical: "s",
    },
    buttonSecondary: {
      fontWeight: "bold",
      borderRadius: "m",
      color: "buttonPrimary",
      padding: "s",
    },
    buttonText: {
      fontWeight: "bold",
    },
    defaults: {},
  },

  cardVariants: {
    screenContainer: {
      padding: "l",
    },
    section: {
      padding: "m",
    },
    card: {
      padding: "s",
    },

    defaults: {},
  },

  buttonVariants: {
    buttonPrimary: {
      borderRadius: "m",
      backgroundColor: "buttonPrimaryForeground",
    },

    buttonSecondary: {
      borderRadius: "m",
      backgroundColor: "buttonSecondaryForeground",
    },
    buttonText: {},
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;
