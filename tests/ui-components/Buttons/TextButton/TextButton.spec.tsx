import { TextButton } from "@ui-components/Buttons/TextButton/TextButton";
import theme from "@assets/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { fireEvent, render } from "@testing-library/react-native";

describe("TextButton", () => {
  test("should render text button with correct styles", async () => {
    // When
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <TextButton onPress={jest.fn()} label="Login" fontSize={18} />
      </ThemeProvider>
    );

    // Then
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  test("should call onPress when text button is pressed", async () => {
    // Given
    const onPress = jest.fn();
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <TextButton onPress={onPress} label="Login" />
      </ThemeProvider>
    );

    // When
    const button = renderedComponent.getByText("Login");
    fireEvent(button, "press");

    // Then
    expect(onPress).toHaveBeenCalled();
  });
});
