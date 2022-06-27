import { ITaskServer, IUpdateValue } from "./../types/types";
import httpService from "./http.service";

const tasksEndPoint = "tasks/";
const unregisteredTasksEndPoint = "unregistered/defaultkey/tasks/";

const tasksService = {
  fetch: async (testId: string) => {
    const { data } = await httpService.get(tasksEndPoint, {
      params: {
        orderBy: '"testId"',
        equalTo: `"${testId}"`,
      },
    });
    return data;
  },
  fetchDefault: async () => {
    const { data } = await httpService.get(unregisteredTasksEndPoint);
    return data;
  },
  create: async (content: ITaskServer) => {
    const { data } = await httpService.put(tasksEndPoint + content.id, content);
    return data;
  },
  updateValue: async (taskId: string, value: IUpdateValue) => {
    const { data } = await httpService.patch(tasksEndPoint + taskId, value);
    return data;
  },
  delete: async (id: string) => {
    const { data } = await httpService.delete(tasksEndPoint + id);
    return data;
  },
  update: async (content: ITaskServer) => {
    const { data } = await httpService.patch(
      tasksEndPoint + content.id,
      content
    );
    return data;
  },
};
export default tasksService;
