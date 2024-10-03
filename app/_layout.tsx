import { Stack } from "expo-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
