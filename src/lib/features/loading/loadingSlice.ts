import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isLoading: boolean;
}

const initialState: IState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
