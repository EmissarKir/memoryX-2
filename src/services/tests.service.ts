import { ITestServer } from "./../types/types";
import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const testsEndPoint = "tests/";
const unRegisteredEndPoint = "unregistered/";

const testsService = {
  fetch: async (userId: string) => {
    const { data } = await httpService.get(testsEndPoint, {
      params: {
        orderBy: '"userId"',
        equalTo: `"${userId}"`,
      },
    });
    return data;
  },
  fetchDefault: async () => {
    const { data } = await httpService.get(unRegisteredEndPoint);
    return data;
  },
  create: async (content: ITestServer) => {
    const { data } = await httpService.put(testsEndPoint + content.id, content);
    return data;
  },
};
export default testsService;
