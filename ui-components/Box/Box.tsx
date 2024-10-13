import { PropsWithChildren } from "react";
import {
  BoxProps,
  createRestyleComponent,
  createVariant,
  spacing,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@assets/styles/theme";

type Props = PropsWithChildren<
  BoxProps<Theme> & VariantProps<Theme, "cardVariants">
>;

export const Box = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "cardVariants" }),
]);
