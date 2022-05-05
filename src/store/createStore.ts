import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testsReducer from "./test";

const rootReducer = combineReducers({
  tests: testsReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
export default createStore;
