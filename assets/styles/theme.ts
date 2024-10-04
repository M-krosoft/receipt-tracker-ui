import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
  red: "#EB5757",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    errorMessage: palette.red,
    successMessage: palette.greenPrimary,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
});

export type Theme = typeof theme;
export default theme;
