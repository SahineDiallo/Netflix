import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, username: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    set_username: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { login, logout, set_username } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUsername = (state) => state.user.username;
export default userSlice.reducer;
