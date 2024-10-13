import { Theme } from "@assets/styles/theme";
import {
  color,
  composeRestyleFunctions,
  TextProps,
  typography,
  useRestyle,
} from "@shopify/restyle";
import { TouchableOpacity } from "react-native";
import { Text } from "@ui-components/Text/Text";

type RestyleProps = TextProps<Theme>;

const restyleTextFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  typography,
]);

type Props = TextProps<Theme> & {
  onPress: () => void;
  label: string;
};

export const TextButton = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleTextFunctions, rest);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      accessibilityRole={"button"}
    >
      <Text fontWeight={"bold"} textAlign="center" {...props}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
