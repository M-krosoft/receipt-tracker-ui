import { LoginData } from "@/features/authentication/interfaces/login-data.interface";
import { RegisterData } from "@/features/authentication/interfaces/register-data.interface";
import { AUTH_PREFIX } from "@api/api-prefixes";
import { useHttp } from "@api/communication/useHttp";
import { LoginDataDto } from "@api/dtos/authentication/LoginData.dto";
import { RegisterDataDto } from "@api/dtos/authentication/RegisterData.dto";
import { TokenResponseDto } from "@api/dtos/authentication/TokenResponse.dto";

export const useAuth = () => {
  const { postRequest } = useHttp();

  const login = async (loginData: LoginData): Promise<string> => {
    const response = await postRequest<LoginDataDto, TokenResponseDto>(
      `${AUTH_PREFIX}/login`,
      loginData
    );
    return response.accessToken;
  };

  const register = async (registerData: RegisterData): Promise<string> => {
    const response = await postRequest<RegisterDataDto, TokenResponseDto>(
      `${AUTH_PREFIX}/register`,
      registerData
    );
    return response.accessToken;
  };

  return { login, register };
};
