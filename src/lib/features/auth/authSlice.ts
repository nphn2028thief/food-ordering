import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types/auth";

interface IState {
  user: IUser;
  accessToken: string;
}

const initialState: IState = {
  user: {} as IUser,
  accessToken: "",
};

const authSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, setAccessToken, clearUser } = authSlice.actions;
export default authSlice.reducer;
