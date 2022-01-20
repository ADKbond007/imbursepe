import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { myreducerSlice } from "./Reducer/myReducer";
import red from "./Reducer/myRed";
const store = configureStore({
  reducer: red,
});
export default store;
