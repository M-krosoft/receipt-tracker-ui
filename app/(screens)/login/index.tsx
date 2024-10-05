import { router } from "expo-router";
import { Button } from "react-native";
import { Box } from "@ui-components/Box/Box";

export default function Login() {
  return (
    <Box variant="screenContainer">
      <Button
        onPress={() => {
          router.push("/home");
        }}
        title="Login"
      ></Button>
    </Box>
  );
}
