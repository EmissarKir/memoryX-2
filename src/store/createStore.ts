import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import testsReducer from "./tests";
import usersReducer from "./users";

const rootReducer = combineReducers({
  tests: testsReducer,
  users: usersReducer,
  tasks: tasksReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
}
export default createStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
