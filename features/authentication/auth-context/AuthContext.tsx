import { authStateReducer } from "@/features/authentication/auth-context/authStateReducer";
import { AuthStates } from "@/features/authentication/enums/auth-states.enum";
import { AuthState } from "@/features/authentication/types/auth-state.type";
import { LoginData } from "@/features/authentication/interfaces/login-data.interface";
import { RegisterData } from "@/features/authentication/interfaces/register-data.interface";
import { useAuth } from "@api/hooks/authentication/useAuth";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const setAxiosAuthHeader = (token: string | undefined) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const initialAuthState: AuthState = {
  type: AuthStates.UNAUTHENTICATED,
  token: undefined,
  isLoading: false,
  error: null,
};

export interface AuthContextData {
  authData: AuthState;
  loginUser: (loginData: LoginData) => void;
  registerUser: (registerData: RegisterData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [authData, dispatch] = useReducer(authStateReducer, initialAuthState);
  const { login, register } = useAuth();

  const saveToken = useCallback(
    async (token: string) => {
      await SecureStore.setItemAsync("token", token);
      dispatch({ type: AuthStates.AUTHENTICATED, payload: { token } });
      setAxiosAuthHeader(token);
    },
    [dispatch]
  );

  const loginUser = useCallback(
    async (loginData: LoginData) => {
      try {
        dispatch({ type: AuthStates.LOADING });

        const token = await login(loginData);
        saveToken(token);
      } catch (error) {
        handleAuthError(error);
      }
    },
    [dispatch, login, saveToken]
  );

  const registerUser = useCallback(
    async (registerData: RegisterData) => {
      try {
        dispatch({ type: AuthStates.LOADING });
        const token = await register(registerData);
        saveToken(token);
      } catch (error) {
        handleAuthError(error);
      }
    },
    [dispatch, register, saveToken]
  );

  const restoreSession = useCallback(async () => {
    try {
      const token = SecureStore.getItem("token");
      if (token) {
        dispatch({ type: AuthStates.AUTHENTICATED, payload: { token } });
        setAxiosAuthHeader(token);
      }
    } catch (error: unknown) {
      // TODO: investigate what can fail during restore and handle error or remove try catch
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      dispatch({ type: AuthStates.UNAUTHENTICATED });
      setAxiosAuthHeader(undefined);
    } catch (error: unknown) {
      // TODO: investigate what can fail during restore and handle error or remove try catch
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  }, [dispatch]);

  const handleAuthError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      dispatch({ type: AuthStates.ERROR, payload: { error } });
    } else {
      dispatch({
        type: AuthStates.ERROR,
        payload: { error: new Error("Unknown error") },
      });
    }
  };

  useEffect(() => {
    restoreSession();
  }, [restoreSession]);

  const data = useMemo(
    () => ({ authData, loginUser, registerUser, logout }),
    [authData, loginUser, registerUser, logout]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
