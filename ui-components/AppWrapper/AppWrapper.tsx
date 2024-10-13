import theme from "@assets/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Platform, SafeAreaView } from "react-native";
import { StatusBar as ReactNativeStatusBar } from "react-native";
import { StyleSheet } from "react-native";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" ? ReactNativeStatusBar.currentHeight : 0,
  },
});
