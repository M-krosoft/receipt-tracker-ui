import { useGetTest } from "@api/hooks/test/useGetTest";
import { Box } from "@ui-components/Box/Box";
import { Text } from "@ui-components/Text/Text";
import { router } from "expo-router";
import { useEffect } from "react";
import { translate } from "react-i18nify";
import { View, Button } from "react-native";

export default function WelcomePage() {
  const { data, isLoading, isError } = useGetTest();
  useEffect(() => {}, [data]);
  return (
    <View>
      <Text>{data && data.title}</Text>
      <Text> {isLoading && "Loading"}</Text>
      <Text>{isError && "Error"}</Text>

      <Box variant="screenContainer">
        <Box variant="section">
          <Text color="successMessage" variant="header1">
            {translate("pages.welcomePage.test")}
          </Text>
          <Text color="errorMessage" variant="body1">
            {translate("pages.welcomePage.test")}
          </Text>
        </Box>

        <Box variant="card">
          <Text variant="header2"> {translate("pages.welcomePage.test")} </Text>
          <Text variant="body2"> {translate("pages.welcomePage.test")} </Text>
        </Box>

        <Box>
          <Text variant="header3"> {translate("pages.welcomePage.test")} </Text>
          <Text variant="body3"> {translate("pages.welcomePage.test")} </Text>
        </Box>
      </Box>

      <Button
        onPress={() => {
          router.push("/login");
        }}
        title="Login"
      />
    </View>
  );
}
