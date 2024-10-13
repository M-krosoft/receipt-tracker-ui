import { useLocalSearchParams } from "expo-router";
import { Box } from "@ui-components/Box/Box";
import { Text } from "@ui-components/Text/Text";

export default function Auth() {
  const searchParams = useLocalSearchParams();
  const selectedTab = searchParams?.tab ?? "login";
  return (
    <Box variant="screenContainer">
      {selectedTab === "Login" ? <Text>Login</Text> : <Text>Register</Text>}
    </Box>
  );
}
