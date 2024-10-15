import { AuthStates } from "@/features/authentication/enums/auth-states.enum";

export type AuthActions =
  | {
      type: AuthStates.AUTHENTICATED;
      payload: { token: string };
    }
  | {
      type: AuthStates.UNAUTHENTICATED;
    }
  | {
      type: AuthStates.LOADING;
    }
  | {
      type: AuthStates.ERROR;
      payload: { error: Error };
    };
