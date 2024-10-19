import { API_URL } from "@api/api-url";
import axios, { AxiosRequestConfig } from "axios";

export const useHttp = () => {
  const getRequest = async <TResponseData>(
    url: string,
    config?: AxiosRequestConfig<undefined>
  ) => {
    const response = await axios.get<TResponseData>(`${API_URL}${url}`, config);
    return response.data;
  };

  const postRequest = async <TRequestData, TResponseData>(
    url: string,
    data: TRequestData,
    config?: AxiosRequestConfig<TRequestData>
  ): Promise<TResponseData> => {
    const response = await axios.post<TResponseData>(
      `${API_URL}${url}`,
      data,
      config
    );
    return response.data;
  };

  const putRequest = async <TRequestData, TResponseData>(
    url: string,
    data: TRequestData,
    config?: AxiosRequestConfig<TRequestData>
  ): Promise<TResponseData> => {
    const response = await axios.put<TResponseData>(
      `${API_URL}${url}`,
      data,
      config
    );
    return response.data;
  };

  const deleteRequest = async <TResponseData>(
    url: string,
    config?: AxiosRequestConfig<undefined>
  ) => {
    const response = await axios.delete<TResponseData>(
      `${API_URL}${url}`,
      config
    );
    return response.data;
  };

  return {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
  };
};
