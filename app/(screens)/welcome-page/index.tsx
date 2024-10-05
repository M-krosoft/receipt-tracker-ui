import { useGetTest } from "@api/hooks/test/useGetTest";
import { Box } from "@ui-components/Box/Box";
import { Button } from "@ui-components/Button/Button";
import { Text } from "@ui-components/Text/Text";
import { router } from "expo-router";
import { useEffect } from "react";
import { translate } from "react-i18nify";

export default function WelcomePage() {
  const { data, isLoading, isError } = useGetTest();
  useEffect(() => {}, [data]);
  return (
    <Box>
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
        width={"50%"}
        margin="auto"
        variant="buttonSecondary"
        onPress={() => {
          router.push("/login");
        }}
        label="Login"
      />

      <Button
        width={"50%"}
        margin="auto"
        variant="buttonPrimary"
        onPress={() => {
          router.push("/login");
        }}
        label="Login"
      />
    </Box>
  );
}
