import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
};

export const getVideos = createAsyncThunk("video/getVideos", async () => {
  const value = await axios.get("/video/trends", { withCredentials: true });
  return value.data;
});
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: {
    [getVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
    [getVideos.rejected]: () => {
      console.log("rejected");
    },
  },
});

export default videoSlice.reducer;
