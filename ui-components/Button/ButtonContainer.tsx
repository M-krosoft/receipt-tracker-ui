import { Theme } from "@assets/styles/theme";
import {
  BoxProps,
  createRestyleComponent,
  VariantProps,
  createVariant,
} from "@shopify/restyle";
import { Box } from "@ui-components/Box/Box";

export const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, "buttonVariants"> & BoxProps<Theme>,
  Theme
>([createVariant({ themeKey: "buttonVariants" })], Box);
