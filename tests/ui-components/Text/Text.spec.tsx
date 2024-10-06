import theme from "@assets/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { render } from "@testing-library/react-native";
import { Text } from "@ui-components/Text/Text";

describe("Text", () => {
  test("should render text with correct styles", async () => {
    // When
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <Text textAlign="center" variant="body1">
          Login
        </Text>
      </ThemeProvider>
    );

    // Then
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
