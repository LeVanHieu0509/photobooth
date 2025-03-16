import axios from "axios";
import { get, set } from "lodash";

const URL = process.env.NEXT_PUBLIC_BACKEND_API;

const request = axios.create({
  baseURL: URL,
});

request.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let status = get(error, "response.status", null);
    let code = get(error, "response.data.code", null);
    let message = get(error, "response.data.message", null);

    if (code === 500 && message == "jwt expired") {
      const event = new Event("expirestoken");
      set(event, "error", error);
      window.dispatchEvent(event);
    } else if (status == 401) {
      window.location.href = "#";
    }
    throw error;
  }
);

export interface ResponseGenerator<T extends object> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export default request;

export const createHomeowner = (body: any) => {
  return request.post<any>("/v1/api/homeowner/create-homeowner", body, {
    headers: {
      "user-client-id": "1",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3JfaWQiOjEsImlhdCI6MTcyNTQzODQwMSwiZXhwIjoxNzI4MDMwNDAxfQ.CISompfwH-WhAhy9AzI8K4D1h0jPM1xKFDDY49dF4jQ",
    },
  });
};

export const createHousekeeper = (body: any) => {
  return request.post<any>("/v1/api/housekeeper/create-housekeeper", body, {
    headers: {
      "user-client-id": "1",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3JfaWQiOjEsImlhdCI6MTcyNTQzODQwMSwiZXhwIjoxNzI4MDMwNDAxfQ.CISompfwH-WhAhy9AzI8K4D1h0jPM1xKFDDY49dF4jQ",
    },
  });
};
