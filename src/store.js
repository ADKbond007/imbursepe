import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
// import { myreducerSlice } from "./Reducer/myReducer";
import reducer from "./Reducer/Reducer";
const store = configureStore({
  reducer: reducer,
});
export default store;
