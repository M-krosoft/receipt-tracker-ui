import theme from "@assets/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { render } from "@testing-library/react-native";
import { Box } from "@ui-components/Box/Box";
import { Text } from "@ui-components/Text/Text";

describe("Box", () => {
  test("should render box with correct styles", async () => {
    // When
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <Box variant="card" margin="m">
          <Text variant="header1">Login</Text>
        </Box>
      </ThemeProvider>
    );

    // Then
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
