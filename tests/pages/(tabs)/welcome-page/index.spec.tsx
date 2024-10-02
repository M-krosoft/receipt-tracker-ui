import { render, screen } from "@testing-library/react-native";
import WelcomePage from "../../../../app/(pages)/welcome-page";

jest.mock("../../../../app/api/hooks/test/useGetTest", () => ({
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

describe("WelcomePage", () => {
  test("should display title", async () => {
    // Given
    await render(<WelcomePage />);

    // When, Then
    screen.getByText("Hello login to use app");
  });
});
