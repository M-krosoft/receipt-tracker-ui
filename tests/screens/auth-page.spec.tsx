import { AuthContextProvider } from "@/features/authentication/auth-context/AuthContext";
import { AppWrapper } from "@ui-components/AppWrapper/AppWrapper";
import React from "react";
import Auth from "@screens/auth";
import { act, fireEvent, render } from "@testing-library/react-native";
import { when } from "jest-when";
import { useAuth } from "@api/hooks/authentication/useAuth";
import { LoginData } from "@/features/authentication/interfaces/login-data.interface";
import * as SecureStore from "expo-secure-store";
import { RegisterData } from "@/features/authentication/interfaces/register-data.interface";

jest.mock("@/api/hooks/authentication/useAuth");
jest.mock("expo-secure-store");

describe("AuthPage", () => {
  beforeEach(() => {
    when(SecureStore.getItem).calledWith("token").mockReturnValue(null);
  });
  test("should throw error if AuthContext is not provided", async () => {
    // Given, When, Then
    expect(() =>
      render(
        <AppWrapper>
          <Auth />
        </AppWrapper>
      )
    ).toThrowError();
  });

  test("should login user if request is successful", async () => {
    // Given
    const loginData: LoginData = {
      email: "test1111@test.com",
      password: "Tester1!",
    };
    const loginMock = jest.fn();
    when(useAuth).mockReturnValue({
      login: loginMock,
      register: jest.fn(),
    });
    when(loginMock).calledWith(loginData).mockResolvedValue("token");

    const { findByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );

    // When
    const loginButton = await findByText("Login");
    fireEvent(loginButton, "press");

    // Then
    expect(findByText("Loading")).toBeTruthy();

    // When
    await new Promise(process.nextTick);

    // Then
    expect(await findByText("token")).toBeTruthy();
  });

  test("should throw error if login request fails", async () => {
    // Given
    const loginData: LoginData = {
      email: "test1111@test.com",
      password: "Tester1!",
    };
    const loginMock = jest.fn();
    when(useAuth).mockReturnValue({
      login: loginMock,
      register: jest.fn(),
    });
    when(loginMock).calledWith(loginData).mockRejectedValue("error");

    const { findByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );

    // When
    const loginButton = await findByText("Login");
    fireEvent(loginButton, "press");

    // Then
    expect(await findByText("Loading")).toBeTruthy();

    // When
    await new Promise(process.nextTick);

    // Then
    expect(findByText("Error")).toBeTruthy();
  });

  test("should register user if request is successful", async () => {
    // Given
    const registerData: RegisterData = {
      name: "Tester",
      email: "test1111@test.com",
      password: "Tester1!",
    };
    const registerMock = jest.fn();
    when(useAuth).mockReturnValue({
      login: jest.fn(),
      register: registerMock,
    });
    when(registerMock).calledWith(registerData).mockResolvedValue("token");

    const { findByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );

    // When
    const registerButton = await findByText("Register");
    fireEvent(registerButton, "press");

    // Then
    expect(await findByText("Loading")).toBeTruthy();

    // When
    await new Promise(process.nextTick);

    // Then
    expect(await findByText("token")).toBeTruthy();
  });

  test("should throw error if register request fails", async () => {
    // Given
    const registerData: RegisterData = {
      name: "Tester",
      email: "test1111@test.com",
      password: "Tester1!",
    };
    const registerMock = jest.fn();
    when(useAuth).mockReturnValue({
      login: jest.fn(),
      register: registerMock,
    });
    when(registerMock).calledWith(registerData).mockRejectedValue("error");

    const { findByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );

    // When
    const registerButton = await findByText("Register");
    fireEvent(registerButton, "press");

    // Then
    expect(await findByText("Loading")).toBeTruthy();

    // When
    await new Promise(process.nextTick);

    // Then
    expect(await findByText("Error")).toBeTruthy();
  });

  test("should logout user", async () => {
    // Given
    const loginData: LoginData = {
      email: "test1111@test.com",
      password: "Tester1!",
    };
    const loginMock = jest.fn();
    when(useAuth).mockReturnValue({
      login: loginMock,
      register: jest.fn(),
    });
    when(loginMock).calledWith(loginData).mockResolvedValue("token");

    const { findByText, queryByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );
    // Login User
    const loginButton = await findByText("Login");
    act(() => {
      fireEvent(loginButton, "press");
    });
    await new Promise(process.nextTick);
    expect(await findByText("token")).toBeTruthy();

    // When
    const logoutButton = await findByText("Logout");
    act(() => {
      fireEvent(logoutButton, "press");
    });
    await new Promise(process.nextTick);

    // Then
    expect(queryByText("token")).toBeFalsy();
  });

  test("should restore user session", async () => {
    // Given, When
    when(SecureStore.getItem).calledWith("token").mockReturnValue("token");

    const { findByText } = render(
      <AuthContextProvider>
        <AppWrapper>
          <Auth />
        </AppWrapper>
      </AuthContextProvider>
    );

    // Then
    expect(await findByText("token")).toBeTruthy();
  });
});
