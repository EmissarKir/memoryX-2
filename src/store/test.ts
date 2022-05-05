import { AppDispatch } from "./../index";
import { createSlice } from "@reduxjs/toolkit";
import testsService from "../services/tests.service";

type SliceState = {
  entities: any[];
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
  },
});

const { reducer: testsReducer, actions } = testsSlice;
const { testsRecieved, testsRequestFailed, testsRequested } = actions;

export const loadTests = () => async (dispatch: AppDispatch) => {
  dispatch(testsRequested());
  try {
    const { data } = await testsService.fetch();
    dispatch(testsRecieved(data));
  } catch (error) {
    dispatch(testsRequestFailed(error));
  }
};

// Селекторы
// export const getTest = () => (state: SliceState) => state.entities;

export default testsReducer;
