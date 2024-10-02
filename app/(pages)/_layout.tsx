import { Stack } from "expo-router";

export default function HomeScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="welcome-page/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="(logged-user)" options={{ headerShown: false }} />
    </Stack>
  );
}
