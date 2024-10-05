import { Stack } from "expo-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import { initializeTranslations } from "@assets/translations/initializeTranslations";
import theme from "@assets/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Box } from "@ui-components/Box/Box";
import {
  Platform,
  SafeAreaView,
  StatusBar as ReactNativeStatusBar,
  StyleSheet,
} from "react-native";

export default function RootLayout() {
  initializeTranslations();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeAreaView}>
          <Box flex={1}>
            <StatusBar style="auto" />
            <Stack>
              <Stack.Screen name="(screens)" options={{ headerShown: false }} />
            </Stack>
          </Box>
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" ? ReactNativeStatusBar.currentHeight : 0,
  },
});
