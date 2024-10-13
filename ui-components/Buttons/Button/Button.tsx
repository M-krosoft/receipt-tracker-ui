import { Theme } from "@assets/styles/theme";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BackgroundColorProps,
  composeRestyleFunctions,
  TextProps,
  VariantProps,
  BoxProps,
} from "@shopify/restyle";
import { ButtonContainer } from "@ui-components/Buttons/Button/ButtonContainer";
import { Text } from "@ui-components/Text/Text";
import { TouchableOpacity } from "react-native";

type RestyleProps = BoxProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const restyleBoxFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  fontSize?: TextProps<Theme>["fontSize"];
};

export const Button = ({ onPress, label, fontSize, ...rest }: Props) => {
  const props = useRestyle(restyleBoxFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress} role={"button"} activeOpacity={0.9}>
      <ButtonContainer {...props}>
        <Text textAlign="center" fontSize={fontSize} variant={props.variant}>
          {label}
        </Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};
