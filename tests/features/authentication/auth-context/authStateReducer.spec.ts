import { AuthActions } from "@/features/authentication/auth-context/auth-actions.type";
import { authStateReducer } from "@/features/authentication/auth-context/authStateReducer";
import { AuthStates } from "@/features/authentication/enums/auth-states.enum";
import { AuthState } from "@/features/authentication/types/auth-state.type";

describe("AuthStateReducer", () => {
  test("should set Unauthenticated state", () => {
    // Given
    const state: AuthState = {
      type: AuthStates.AUTHENTICATED,
      token: "test",
      isLoading: false,
      error: null,
    };
    const action: AuthActions = {
      type: AuthStates.UNAUTHENTICATED,
    };

    const updatedState = {
      type: AuthStates.UNAUTHENTICATED,
      token: undefined,
      isLoading: false,
      error: null,
    };

    // When
    const result = authStateReducer(state, action);

    // Then
    expect(result).toEqual(updatedState);
  });

  test("should set Loading state", () => {
    // Given
    const state: AuthState = {
      type: AuthStates.UNAUTHENTICATED,
      token: undefined,
      isLoading: false,
      error: null,
    };
    const action: AuthActions = {
      type: AuthStates.LOADING,
    };

    const updatedState = {
      type: AuthStates.LOADING,
      token: undefined,
      isLoading: true,
      error: null,
    };

    // When
    const result = authStateReducer(state, action);

    // Then
    expect(result).toEqual(updatedState);
  });

  test("should set Error state", () => {
    // Given
    const state: AuthState = {
      type: AuthStates.LOADING,
      token: undefined,
      isLoading: true,
      error: null,
    };
    const action: AuthActions = {
      type: AuthStates.ERROR,
      payload: {
        error: new Error(),
      },
    };

    const updatedState: AuthState = {
      type: AuthStates.ERROR,
      token: undefined,
      isLoading: false,
      error: new Error(),
    };

    // When
    const result = authStateReducer(state, action);

    // Then
    expect(result).toEqual(updatedState);
  });

  test("should set Authenticated state", () => {
    // Given
    const state: AuthState = {
      type: AuthStates.UNAUTHENTICATED,
      token: undefined,
      isLoading: false,
      error: null,
    };
    const action: AuthActions = {
      type: AuthStates.AUTHENTICATED,
      payload: {
        token: "test",
      },
    };

    const updatedState: AuthState = {
      type: AuthStates.AUTHENTICATED,
      token: "test",
      isLoading: false,
      error: null,
    };

    // When
    const result = authStateReducer(state, action);

    // Then
    expect(result).toEqual(updatedState);
  });
});
