import { createSlice } from "@reduxjs/toolkit";

import type { ThemeStateType } from "../interface";
import type { PayloadAction } from "@reduxjs/toolkit";

const themeState = {
  isDark: false,
  isCollapsed: false,
  language: null,
  themeColor: ""
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeState,
  reducers: {
    setTheme<T extends keyof ThemeStateType>(
      state: ThemeStateType,
      { payload }: PayloadAction<{ key: T; value: ThemeStateType[T] }>
    ) {
      state[payload.key] = payload.value;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
