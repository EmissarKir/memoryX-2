import { IUserServer } from "../types/types";
import httpService from "./http.service";

const usersEndPoint = "users/";

const usersService = {
  fetch: async () => {
    const data = await httpService.get(usersEndPoint);
    return data;
  },
  create: async (content: IUserServer) => {
    const { data } = await httpService.put(
      usersEndPoint + content.userId,
      content
    );
    return data;
  },
  fetchUserById: async (userId: string) => {
    const { data } = await httpService.get(usersEndPoint, {
      params: {
        orderBy: '"userId"',
        equalTo: `"${userId}"`,
      },
    });
    return data;
  },
  update: async (content: IUserServer) => {
    const { data } = await httpService.patch(
      usersEndPoint + content.userId,
      content
    );
    return data;
  },
};
export default usersService;
