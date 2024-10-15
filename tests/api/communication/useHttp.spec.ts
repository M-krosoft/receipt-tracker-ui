import { API_URL } from "@api/api-url";
import { useHttp } from "@api/communication/useHttp";
import axios, { AxiosRequestConfig } from "axios";
import { when } from "jest-when";

jest.mock("axios");

describe("useHttp", () => {
  it("should send post request and return response", async () => {
    // Given
    const requestData = { data: "data" };
    const requestEndpoint = "/url";
    const requestOptions: AxiosRequestConfig = { timeout: 1000 };
    const responseData = { data: "test" };
    when(axios.post)
      .calledWith(`${API_URL}${requestEndpoint}`, requestData, requestOptions)
      .mockResolvedValue(responseData);
    const { postRequest } = useHttp();

    // When
    const response = await postRequest(
      requestEndpoint,
      requestData,
      requestOptions
    );

    // Then
    expect(response).toEqual(responseData.data);
  });

  it("should send get request and return response", async () => {
    // Given
    const requestEndpoint = "/url";
    const requestOptions: AxiosRequestConfig = { timeout: 1000 };
    const responseData = { data: "test" };
    when(axios.get)
      .calledWith(`${API_URL}${requestEndpoint}`, requestOptions)
      .mockResolvedValue(responseData);
    const { getRequest } = useHttp();

    // When
    const response = await getRequest(requestEndpoint, requestOptions);

    // Then
    expect(response).toEqual(responseData.data);
  });

  it("should send put request and return response", async () => {
    // Given
    const requestData = { data: "data" };
    const requestEndpoint = "/url";
    const requestOptions: AxiosRequestConfig = { timeout: 1000 };
    const responseData = { data: "test" };
    when(axios.put)
      .calledWith(`${API_URL}${requestEndpoint}`, requestData, requestOptions)
      .mockResolvedValue(responseData);
    const { putRequest } = useHttp();

    // When
    const response = await putRequest(
      requestEndpoint,
      requestData,
      requestOptions
    );

    // Then
    expect(response).toEqual(responseData.data);
  });

  it("should send delete request and return response", async () => {
    // Given
    const requestEndpoint = "/url";
    const requestOptions: AxiosRequestConfig = { timeout: 1000 };
    const responseData = { data: "test" };
    when(axios.delete)
      .calledWith(`${API_URL}${requestEndpoint}`, requestOptions)
      .mockResolvedValue(responseData);
    const { deleteRequest } = useHttp();

    // When
    const response = await deleteRequest(requestEndpoint, requestOptions);

    // Then
    expect(response).toEqual(responseData.data);
  });
});
