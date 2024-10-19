import { useHttp } from "@api/communication/useHttp";
import { useAuth } from "@api/hooks/authentication/useAuth";
import { when } from "jest-when";

jest.mock("@api/communication/useHttp");

describe("useAuth", () => {
  it("should login and return token", async () => {
    // Given
    const loginData = { email: "email", password: "password" };
    const token = "Bearer 123";
    const postRequestMock = jest.fn();
    when(useHttp).mockReturnValue({
      postRequest: postRequestMock,
      putRequest: jest.fn(),
      getRequest: jest.fn(),
      deleteRequest: jest.fn(),
    });
    postRequestMock.mockResolvedValue({ accessToken: token });
    const { login } = useAuth();

    // When
    const result = await login(loginData);

    // Then
    expect(result).toBe(token);
  });

  it("should register and return token", async () => {
    // Given
    const registerData = { email: "email", password: "password" };
    const token = "Bearer 123";
    const postRequestMock = jest.fn();
    when(useHttp).mockReturnValue({
      postRequest: postRequestMock,
      putRequest: jest.fn(),
      getRequest: jest.fn(),
      deleteRequest: jest.fn(),
    });
    postRequestMock.mockResolvedValue({ accessToken: token });
    const { register } = useAuth();

    // When
    const result = await register(registerData);

    // Then
    expect(result).toBe(token);
  });
});
