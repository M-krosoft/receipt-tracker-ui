import { AuthStates } from "@/features/authentication/enums/auth-states.enum";

export type AuthState =
  | {
      type: AuthStates.AUTHENTICATED;
      token: string;
      isLoading: false;
      error: null;
    }
  | {
      type: AuthStates.UNAUTHENTICATED;
      token: undefined;
      isLoading: false;
      error: null;
    }
  | { type: AuthStates.LOADING; token: undefined; isLoading: true; error: null }
  | {
      type: AuthStates.ERROR;
      token: undefined;
      isLoading: false;
      error: Error;
    };
