import { PropsWithChildren } from "react";
import { Theme } from "../../../assets/styles/theme";
import {
  BoxProps,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";

type Props = PropsWithChildren<
  BoxProps<Theme> & VariantProps<Theme, "cardVariants">
>;

export const Box = createRestyleComponent<Props, Theme>([
  createVariant({ themeKey: "cardVariants" }),
]);
