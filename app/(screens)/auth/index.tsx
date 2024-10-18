import { useLocalSearchParams } from "expo-router";
import { Box } from "@ui-components/Box/Box";
import { Text } from "@ui-components/Text/Text";
import { useAuthContext } from "@/features/authentication/auth-context/useAuthContext";
import { Button } from "@ui-components/Button/Button";

export default function Auth() {
  const searchParams = useLocalSearchParams();
  const selectedTab = searchParams?.tab ?? "login";
  const { loginUser, registerUser, authData, logout } = useAuthContext();
  return (
    <>
      <Box>
        <Text>{selectedTab}</Text>
      </Box>
      <Button
        onPress={() =>
          loginUser({ email: "test1111@test.com", password: "Tester1!" })
        }
        label="Login"
      ></Button>
      <Text>{authData.token}</Text>
      {authData.isLoading && <Text>Loading</Text>}
      {authData.error && <Text>Error</Text>}
      <Button
        onPress={() =>
          registerUser({
            name: "Tester",
            email: "test1111@test.com",
            password: "Tester1!",
          })
        }
        label="Register"
      ></Button>
      <Button onPress={() => logout()} label="Logout"></Button>
    </>
  );
}
