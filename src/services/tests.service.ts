import httpService from "./http.service";

const testsEndPoint = "tests";

const testsService = {
  fetch: async () => {
    const data = httpService.get(`${testsEndPoint}.json`);
    return data;
  },
};
export default testsService;
