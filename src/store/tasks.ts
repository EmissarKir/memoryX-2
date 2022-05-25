import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import { nanoid } from "nanoid";
import history from "../utils/history";
import { ITask, ITaskServer } from "../types/types";
import tasksService from "../services/tasks.service";
import { AppDispatch, RootState } from "./createStore";

export type SliceState = {
  entities: ITaskServer[];
  isLoading: boolean;
  error: string | null;
  filter: string;
};

const initialState: SliceState = {
  entities: [],
  isLoading: false,
  error: null,
  filter: "",
};

const tasksSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    tasksRequested: (state) => {
      state.isLoading = true;
    },
    tasksRecieved: (state, action: PayloadAction<ITaskServer[]>) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    tasksRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    taskCreateSuccess: (state, action: PayloadAction<ITaskServer>) => {
      state.entities.push(action.payload);
    },
    taskUpdatedCount: (state, action: PayloadAction<ITaskServer>) => {
      const item = state.entities.find((x) => x.id === action.payload.id);
      item!.count++;
    },
    taskUpdateCountRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    taskDeleteSuccess: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter((x) => x.id !== action.payload);
    },
    taskUpdateSuccess: (state, action: PayloadAction<ITaskServer>) => {
      const index = state.entities.findIndex((x) => {
        return x.id === action.payload.id;
      });
      state.entities[index] = action.payload;
    },
    taskSetFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    taskUpdateMaxNumberRepeat: (state, action) => {
      const item = state.entities.find((x) => x.id === action.payload.id);
      item!.maxRepeat = action.payload.newCount;
    },
  },
});

const { reducer: tasksReducer, actions } = tasksSlice;
const {
  tasksRecieved,
  tasksRequestFailed,
  tasksRequested,
  taskCreateSuccess,
  taskUpdatedCount,
  taskUpdateCountRequestFailed,

  taskDeleteSuccess,
  taskUpdateSuccess,
  taskSetFilter,
  taskUpdateMaxNumberRepeat,
} = actions;

const taskCreateRequest = createAction("tasks/taskCreateRequest");
const taskUpdateRequest = createAction("tasks/taskUpdateRequest");
const taskUpdatedStatusSuccess = createAction("tasks/taskUpdatedStatusSuccess");

const taskDeleteRequest = createAction("tasks/taskDeleteRequest");
const taskDeleteRequestFailed = createAction("tasks/taskDeleteRequestFailed");
const taskUpdateRequestFailed = createAction("tasks/taskUpdateRequestFailed");

export const createTask =
  (payload: ITask) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const testId = localStorageService.getLocalCurrentTest();
    const maxRepeat = getState().users.entities[0].maxCountRepeat;
    dispatch(taskCreateRequest());
    try {
      const newData = {
        ...payload,
        id: nanoid(),
        count: 0,
        status: "в работе",
        testId,
        createdBy: Date.now(),
        maxRepeat,
      };
      const { content } = await tasksService.create(newData);
      dispatch(taskCreateSuccess(content));
      history.push(`/tests/${testId}`);
    } catch (error) {}
  };
export const updateTask =
  (payload: ITaskServer) => async (dispatch: AppDispatch) => {
    const testId = localStorageService.getLocalCurrentTest();
    dispatch(taskUpdateRequest());
    try {
      const { content } = await tasksService.update(payload);
      content && dispatch(taskUpdateSuccess(content));
      if (
        payload.count === payload.maxRepeat &&
        payload.status === "в работе"
      ) {
        dispatch(changeMaxNumberRepeat(content));
      }
      history.push(`/tests/${testId}`);
    } catch (error) {
      dispatch(taskUpdateRequestFailed());
    }
  };
export const loadTasks =
  (taskId: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = getState().users.auth?.userId;

    const path = userId
      ? tasksService.fetch(taskId)
      : tasksService.fetchDefault();

    dispatch(tasksRequested());
    try {
      const { content } = await path;
      dispatch(tasksRecieved(content));
    } catch (error) {
      dispatch(tasksRequestFailed(error));
    }
  };
// изменить maxRepeat
export const changeMaxNumberRepeat =
  (payload: ITaskServer) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const maxNumber = getState().users.entities[0].maxCountRepeat;
    const newCount = payload.maxRepeat + maxNumber;
    dispatch(taskUpdateRequest());
    try {
      const { content } = await tasksService.updateValue(payload.id, {
        maxRepeat: newCount,
      });
      dispatch(taskUpdateMaxNumberRepeat({ ...payload, newCount }));
    } catch (error) {
      dispatch(taskUpdateCountRequestFailed(error));
    }
  };

export const changeRepeatCount =
  (payload: ITaskServer) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(taskUpdateRequest());
    try {
      const { content } = await tasksService.updateValue(payload.id, {
        count: payload.count + 1,
      });
      content && dispatch(taskUpdatedCount(payload));
      if (payload.count + 1 === payload.maxRepeat) {
        dispatch(changeTaskStatus(payload));
      }
    } catch (error) {
      dispatch(taskUpdateCountRequestFailed(error));
    }
  };

export const changeTaskStatus =
  (payload: ITaskServer) => async (dispatch: AppDispatch) => {
    dispatch(taskUpdateRequest());
    try {
      const { content } = await tasksService.updateValue(payload.id, {
        status: "завершен",
      });
      content && dispatch(taskUpdatedStatusSuccess());
    } catch (error) {
      dispatch(taskUpdateRequestFailed());
    }
  };
export const deleteTask = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(taskDeleteRequest());
  try {
    const { content } = await tasksService.delete(id);
    if (content === null) {
      dispatch(taskDeleteSuccess(id));
    }
  } catch (error) {
    dispatch(taskDeleteRequestFailed());
  }
};

export const setTaskFilter =
  (content: string) => async (dispatch: AppDispatch) => {
    dispatch(taskSetFilter(content));
  };

// Селекторы
export const getTasks = () => (state: RootState) => state.tasks.entities;
export const getTasksLoadingStatus = () => (state: RootState) =>
  state.tasks.isLoading;
export const getIsWorkingTasks = () => (state: RootState) =>
  state.tasks.entities.filter((task) => task.status !== "завершен");
export default tasksReducer;
// ???
export const getTaskById =
  (id: string = "") =>
  (state: RootState) => {
    if (state.tasks.entities) {
      return state.tasks.entities.find((item) => item.id === id);
    }
  };
export const getFiltredTasks = () => (state: RootState) => {
  const currentFilter = state.tasks.filter;
  if (currentFilter === "") {
    return state.tasks.entities;
  } else {
    return state.tasks.entities.filter(
      (task) =>
        task.answer.toLowerCase().indexOf(currentFilter.toLowerCase()) !== -1 ||
        task.question.toLowerCase().indexOf(currentFilter.toLowerCase()) !== -1
    );
  }
};
