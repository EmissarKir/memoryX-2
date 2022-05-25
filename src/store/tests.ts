import { createAction, createSlice } from "@reduxjs/toolkit";
import testsService from "../services/tests.service";
import { ITest, ITestServer } from "../types/types";
import { getUserId } from "../services/localStorage.service";
import { nanoid } from "nanoid";
import history from "../utils/history";
import { AppDispatch, RootState } from "./createStore";

export type SliceState = {
  entities: ITestServer[];
  isLoading: boolean;
  error: string | null;
};

const initialState: SliceState = {
  entities: [],
  isLoading: false,
  error: null,
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    testsRequested: (state) => {
      state.isLoading = true;
    },
    testsRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    testsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    testCreateSuccess: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

const { reducer: testsReducer, actions } = testsSlice;
const { testsRecieved, testsRequestFailed, testsRequested, testCreateSuccess } =
  actions;

const testCreateRequest = createAction("tests/testCreateRequest");

export const createTest =
  ({ name }: ITest) =>
  async (dispatch: AppDispatch) => {
    dispatch(testCreateRequest());
    try {
      const newData = {
        name,
        userId: getUserId(),
        id: nanoid(),
      };
      const { content } = await testsService.create(newData);
      dispatch(testCreateSuccess(content));
      history.push("/");
    } catch (error) {}
  };

export const loadTests =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    //проверка регистрации пользователя
    const userId = getState().users.auth?.userId;
    // если зареган, то получаем тесты по его id, если нет, то default данные
    const path = userId
      ? testsService.fetch(userId)
      : testsService.fetchDefault();
    dispatch(testsRequested());
    try {
      const { content } = await path;
      dispatch(testsRecieved(content));
    } catch (error) {
      dispatch(testsRequestFailed(error));
    }
  };

// Селекторы
export const getTests = () => (state: RootState) => state.tests.entities;
export const getTestsLoadingStatus = () => (state: RootState) =>
  state.tests.isLoading;

export default testsReducer;
