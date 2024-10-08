import { render, screen } from "@testing-library/react-native";
import { translate } from "react-i18nify";
import { when } from "jest-when";
import { ThemeProvider } from "@shopify/restyle";
import theme from "@assets/styles/theme";
import WelcomePage from "@screens/welcome-page";

jest.mock("@api/hooks/test/useGetTest", () => ({
  useGetTest: () => ({
    data: {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    isLoading: false,
    isError: false,
  }),
}));

jest.mock("react-i18nify");

when(translate)
  .calledWith("pages.welcomePage.test")
  .mockReturnValue("Hello login to use app");

describe("WelcomePage", () => {
  test("should display title", async () => {
    // Given
    await render(
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    );

    // When, Then
    screen.getAllByText("Hello login to use app");
  });
});
