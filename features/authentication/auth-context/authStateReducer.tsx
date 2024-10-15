import { AuthActions } from "@/features/authentication/auth-context/auth-actions.type";
import { AuthStates } from "@/features/authentication/enums/auth-states.enum";
import { AuthState } from "@/features/authentication/types/auth-state.type";
import { Reducer } from "react";

export const authStateReducer: Reducer<AuthState, AuthActions> = (
  _: AuthState,
  action: AuthActions
) => {
  const { type } = action;
  switch (type) {
    case AuthStates.AUTHENTICATED:
      return {
        type: AuthStates.AUTHENTICATED,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    case AuthStates.UNAUTHENTICATED:
      return {
        type: AuthStates.UNAUTHENTICATED,
        token: undefined,
        isLoading: false,
        error: null,
      };
    case AuthStates.LOADING:
      return {
        type: AuthStates.LOADING,
        token: undefined,
        isLoading: true,
        error: null,
      };
    case AuthStates.ERROR:
      return {
        type: AuthStates.ERROR,
        isLoading: false,
        token: undefined,
        error: action.payload.error,
      };
  }
};
