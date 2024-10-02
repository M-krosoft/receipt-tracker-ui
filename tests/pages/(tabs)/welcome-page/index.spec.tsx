import { render, screen } from "@testing-library/react-native";
import WelcomePage from "../../../../app/(pages)/welcome-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("WelcomePage", () => {
  test("should display title", async () => {
    // Given
    await render(
      <QueryClientProvider client={new QueryClient()}>
        <WelcomePage />
      </QueryClientProvider>
    );

    // When, Then
    screen.getByText("Hello login to use app");
  });
});
