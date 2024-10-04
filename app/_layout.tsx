import { Stack } from "expo-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import { initializeTranslations } from "@assets/translations/initializeTranslations";
import theme from "@assets/styles/theme";

export default function RootLayout() {
  initializeTranslations();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
