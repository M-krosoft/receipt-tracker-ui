import { Stack } from "expo-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeTranslations } from "@/assets/translations/initializeTranslations";

export default function RootLayout() {
  initializeTranslations();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
