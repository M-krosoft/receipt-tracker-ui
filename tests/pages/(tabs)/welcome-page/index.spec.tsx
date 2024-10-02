import { render, screen } from "@testing-library/react-native";
import WelcomePage from "../../../../app/(pages)/welcome-page";

describe("WelcomePage", () => {
  test("should display title", async () => {
    // Given
    await render(<WelcomePage />);

    // When, Then
    screen.getByText("Hello login to use app");
  });
});
