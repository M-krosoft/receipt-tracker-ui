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

    buttonPrimary: palette.purplePrimary,
    buttonPrimaryForeground: palette.white,

    buttonSecondary: palette.white,
    buttonSecondaryForeground: palette.purplePrimary,
  },
  spacing: {
    auto: "auto",
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
      borderWidth: 1,
      borderColor: "buttonPrimary",
      borderStyle: "solid",
      fontWeight: "bold",
      fontSize: 16,
      borderRadius: "m",
      color: "buttonPrimary",
      padding: "s",
    },
    buttonSecondary: {
      fontWeight: "bold",
      fontSize: 16,
      color: "buttonSecondary",
      padding: "s",
      borderRadius: "m",
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
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;
