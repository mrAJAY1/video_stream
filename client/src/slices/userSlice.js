/* eslint-disable import/prefer-default-export */
import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", id: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.username = payload.username;
      state.id = payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
