import { Box } from "@ui-components/Box/Box";
import { Text } from "@ui-components/Text/Text";
import { Image } from "react-native";
import { Button } from "@ui-components/Buttons/Button/Button";
import { TextButton } from "@ui-components/Buttons/TextButton/TextButton";
import { translate } from "react-i18nify";
import { router } from "expo-router";

export default function WelcomePage() {
  return (
    <Box flex={1}>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
        alignItems="center"
        paddingHorizontal="xl"
        paddingVertical="xxl"
      >
        <Box
          flexDirection="column"
          gap="xxl"
          marginTop="xxl"
          alignItems="center"
        >
          <Text textAlign="center" variant="header2" color="textPrimary">
            {translate("pages.welcomePage.title")}
          </Text>
          <Box marginTop="xxl">
            <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
              source={require("@assets/img/logo.png")}
            />
          </Box>
        </Box>
        <Box width={"100%"} flexDirection="column" gap="l">
          <Box>
            <Button
              width={"100%"}
              label={translate("pages.welcomePage.loginButton")}
              fontSize={24}
              variant="buttonPrimary"
              onPress={() => {
                router.push({ pathname: "/auth", params: { tab: "Login" } });
              }}
            />
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="s"
          >
            <Text color="textPrimary">
              {translate("pages.welcomePage.accountInfo")}
            </Text>
            <TextButton
              label={translate("pages.welcomePage.registerButton")}
              onPress={() => {
                router.push({ pathname: "/auth", params: { tab: "register" } });
              }}
              color="textAccent"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
