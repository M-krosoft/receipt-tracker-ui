import theme from "@assets/styles/theme";
import { ThemeProvider } from "@shopify/restyle";
import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "@ui-components/Buttons/Button/Button";

describe("Button", () => {
  test("should render button with correct styles", async () => {
    // When
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <Button
          onPress={jest.fn()}
          label="Login"
          fontSize={18}
          variant="buttonPrimary"
        />
      </ThemeProvider>
    );

    // Then
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  test("should call onPress when button is pressed", async () => {
    // Given
    const onPress = jest.fn();
    const renderedComponent = await render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPress} label="Login" />
      </ThemeProvider>
    );

    // When
    const button = renderedComponent.getByText("Login");
    fireEvent(button, "press");

    // Then
    expect(onPress).toHaveBeenCalled();
  });
});
