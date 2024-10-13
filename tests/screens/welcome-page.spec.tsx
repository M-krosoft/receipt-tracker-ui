import { fireEvent, render, screen } from "@testing-library/react-native";
import { translate } from "react-i18nify";
import { when } from "jest-when";
import { ThemeProvider } from "@shopify/restyle";
import theme from "@assets/styles/theme";
import WelcomePage from "@screens/welcome-page";

jest.mock("react-i18nify");
jest.mock("expo-router");
const {
  router: { push },
} = require("expo-router");

describe("WelcomePage", () => {
  test("should navigate to login page", async () => {
    // Given
    when(translate)
      .calledWith("pages.welcomePage.loginButton")
      .mockReturnValue("Login");

    await render(
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    );
    const expectedRouteObject = { params: { tab: "Login" }, pathname: "/auth" };

    // When
    const loginButton = screen.getByText("Login");
    fireEvent(loginButton, "press");

    // When, Then
    expect(push).toHaveBeenCalledWith(expectedRouteObject);
  });

  test("should navigate to register page", async () => {
    // Given
    when(translate)
      .calledWith("pages.welcomePage.registerButton")
      .mockReturnValue("Register");

    await render(
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    );
    const expectedRouteObject = {
      params: { tab: "register" },
      pathname: "/auth",
    };

    // When
    const registerButton = screen.getByText("Register");
    fireEvent(registerButton, "press");

    // When, Then
    expect(push).toHaveBeenCalledWith(expectedRouteObject);
  });
});
