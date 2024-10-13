import { Theme } from "@assets/styles/theme";
import { useTheme } from "@shopify/restyle";
import { Box } from "@ui-components/Box/Box";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreenLayout() {
  const { mainBackgroundGradientFirst, mainBackgroundGradientSecond } =
    useTheme<Theme>().colors;

  return (
    <Box flex={1}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={[mainBackgroundGradientFirst, mainBackgroundGradientSecond]}
      />
      <Stack
        screenOptions={{
          animation: "none",
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="welcome-page/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(logged-user)" options={{ headerShown: false }} />
      </Stack>
    </Box>
  );
}
const styles = StyleSheet.create({
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    height: "100%",
  },
});
