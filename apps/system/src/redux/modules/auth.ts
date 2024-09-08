import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "../interface";

// 定义初始化数据
const authState: AuthState = {
  authMenuList: []
};

// 定义一个切片
const authSlice = createSlice({
  name: "system-auth",
  initialState: authState,
  reducers: {
    // 一般都是使用同步的 reducer
    setAuthMenuList(state, { payload }: { payload: AuthState["authMenuList"] }) {
      state.authMenuList = payload;
    }
  }
});

// 到处 action
export const { setAuthMenuList } = authSlice.actions;
export default authSlice.reducer;
