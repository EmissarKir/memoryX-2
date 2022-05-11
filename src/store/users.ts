import { IUserLogIn } from "./../types/types";
import { AppDispatch } from "./../index";
import { createAction, createSlice } from "@reduxjs/toolkit";
import usersService from "../services/usersService";
import authService from "../services/auth.service";
import { IUser, IUserServer } from "../types/types";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";

type InitialStateType = {
  entities: IUserServer[];
  isLoading: boolean;
  error: any;
  auth: any;
  isLoggedIn: boolean;
};

const initialState: InitialStateType = {
  entities: [],
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = { ...action.payload };
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = [];
      state.isLoggedIn = false;
      state.auth = null;
    },
  },
});
const { actions, reducer: usersReducer } = usersSlice;

const {
  usersRecieved,
  usersRequestFailed,
  usersRequested,
  authRequestSuccess,
  authRequestFailed,
  userCreated,
  userLoggedOut,
} = actions;

const authRequested = createAction("users/authRequested");
const userCreateRequested = createAction("users/userCreateRequested");
const userCreateFailed = createAction("users/userCreateFailed");

export const login =
  ({ email, password }: IUserLogIn) =>
  async (dispatch: AppDispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      dispatch(authRequestSuccess({ userId: data.localId }));
      localStorageService.setTokens(data);
      history.push("/questionsPage");
    } catch (error) {
      dispatch(authRequestFailed(error));
    }
  };

const createUser = (payload: IUserServer) => async (dispatch: AppDispatch) => {
  dispatch(userCreateRequested());
  try {
    const { content } = await usersService.create(payload);
    dispatch(userCreated(content));
  } catch (error) {
    dispatch(userCreateFailed());
  }
};

export const signUp =
  ({ password, email, ...rest }: IUser) =>
  async (dispatch: AppDispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.localId }));
      dispatch(
        createUser({
          userId: data.localId,
          email,
          image:
            "https://cdn5.vectorstock.com/i/thumb-large/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg",
          ...rest,
        })
      );
    } catch (error) {
      dispatch(authRequestFailed(error));
    }
  };

export const logOut = () => (dispatch: AppDispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push("/questionsPage");
};

export const loadUsersList = () => async (dispatch: AppDispatch) => {
  dispatch(usersRequested());
  try {
    const { data } = await usersService.fetch();

    dispatch(usersRecieved(data));
  } catch (error) {
    dispatch(usersRequestFailed(error));
  }
};

export default usersReducer;
