import { IUserLogIn } from "./../types/types";
import { createAction, createSlice } from "@reduxjs/toolkit";
import usersService from "../services/usersService";
import authService from "../services/auth.service";
import { IUser, IUserServer } from "../types/types";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";
import { AppDispatch, RootState } from "./createStore";

type InitialStateType = {
  entities: IUserServer[];
  isLoading: boolean;
  error: any;
  auth: any;
  isLoggedIn: boolean;
  userData: IUserServer | {};
};

const initialState: InitialStateType = localStorageService.getAccessToken()
  ? {
      entities: [],
      isLoading: false,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      userData: {},
    }
  : {
      entities: [],
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      userData: {},
    };

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
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
    currentUserRequested: (state) => {
      state.isLoading = true;
    },
    currentUserRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    currentUserRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
const { actions, reducer: usersReducer } = usersSlice;

const {
  authRequestSuccess,
  authRequestFailed,
  userCreated,
  userLoggedOut,
  currentUserRecieved,
  currentUserRequestFailed,
  currentUserRequested,
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
      history.push("/");
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
          maxCountRepeat: 5,
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
  history.push("/");
};

export const loadCurrentUser =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentUserId = getState().users.auth.userId;
    dispatch(currentUserRequested());
    try {
      const { content } = await usersService.fetchUserById(currentUserId);

      dispatch(currentUserRecieved(content));
    } catch (error) {
      dispatch(currentUserRequestFailed(error));
    }
  };

// selectors
export const getIsLoggedIn = () => (state: RootState) => state.users.isLoggedIn;
export const getCurrentUserId = () => (state: RootState) =>
  state.users.auth.userId;
export const getCurrentUserData = () => (state: RootState) =>
  state.users.entities[0];

export default usersReducer;
