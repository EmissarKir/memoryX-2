import { AppDispatch, RootState } from "../index";
import { createAction, createSlice } from "@reduxjs/toolkit";
import testsService from "../services/tests.service";
import { ITest, ITestServer } from "../types/types";
import { getUserId } from "../services/localStorage.service";
import { nanoid } from "nanoid";

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
    } catch (error) {}
  };

export const loadTests = () => async (dispatch: AppDispatch) => {
  dispatch(testsRequested());
  try {
    const { content } = await testsService.fetch();
    dispatch(testsRecieved(content));
  } catch (error) {
    dispatch(testsRequestFailed(error));
  }
};

// Селекторы
export const getTests = () => (state: RootState) => state.tests.entities;

export default testsReducer;
