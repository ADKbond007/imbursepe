import { createSlice } from "@reduxjs/toolkit";

export const myreducerSlice = createSlice({
  name: "myreducer",
  initialState: {
    value: 0,
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state) => {
      console.log("access");
      state.isLoggedIn = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess } = myreducerSlice.actions;

export default myreducerSlice.reducer;
