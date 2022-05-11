import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testsReducer from "./tests";
import usersReducer from "./users";

const rootReducer = combineReducers({
  tests: testsReducer,
  users: usersReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
export default createStore;
