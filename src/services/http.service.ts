import { IUserServer } from "./../types/types";
import axios, { AxiosRequestConfig } from "axios";
import configFile from "../config.json";
import { httpAuth } from "./auth.service";
import localStorageService from "./localStorage.service";

const http = axios.create({
  baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    if (configFile.isFireBase) {
      if (!config?.url) {
        throw new Error(
          `Expected 'config' and 'config.url' not to be undefined`
        );
      }
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
      const expiresDate = localStorageService.getTokenExpiresDate();
      const refreshToken = localStorageService.getRefreshToken();
      if (refreshToken && Number(expiresDate) < Date.now()) {
        const { data } = await httpAuth.post(`token`, {
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        });

        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          expiresIn: data.expires_in,
          localId: data.user_id,
        });
      }
      const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.params = { ...config.params, auth: accessToken };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function transormData(data: Record<string, IUserServer>) {
  return data && !data.userId && !data.name && !data.question
    ? Object.keys(data).map((key) => ({
        ...data[key],
      }))
    : data;
}
http.interceptors.response.use(
  (res) => {
    if (configFile.isFireBase) {
      res.data = { content: transormData(res.data) };
    }
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log(error);
      // toast.error("Somthing was wrong. Try it later");
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};
export default httpService;
