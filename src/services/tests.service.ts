import { ITestServer } from "./../types/types";
import httpService from "./http.service";

const testsEndPoint = "tests/";

const testsService = {
  fetch: async () => {
    const { data } = await httpService.get(testsEndPoint);
    return data;
  },
  create: async (content: ITestServer) => {
    const { data } = await httpService.put(testsEndPoint + content.id, content);
    return data;
  },
};
export default testsService;
