import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types/auth";

interface IState {
  user: IUser;
}

const initialState: IState = {
  user: {} as IUser,
};

const authSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
