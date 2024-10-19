import { Stack } from "expo-router";
import React from "react";
import { initializeTranslations } from "@/features/translation/initializeTranslations";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AppWrapper } from "@ui-components/AppWrapper/AppWrapper";
import { AuthContextProvider } from "@/features/authentication/auth-context/AuthContext";

export default function RootLayout() {
  initializeTranslations();
  return (
    <AuthContextProvider>
      <AppWrapper>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: "transparent" },
            }}
          >
            <Stack.Screen
              name="(screens)"
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
            />
          </Stack>
        </View>
      </AppWrapper>
    </AuthContextProvider>
  );
}
