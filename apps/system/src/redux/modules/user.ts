import { createSlice } from "@reduxjs/toolkit";

import type { UserState } from "../interface";

// 定义初始化数据
const userState: UserState = {
  token: "",
  userInfo: {
    name: ""
  }
};

// 定义一个切片
const userSlice = createSlice({
  name: "system-user",
  initialState: userState,
  reducers: {
    setToken(state, { payload }: { payload: UserState["token"] }) {
      state.token = payload;
    },
    setUserInfo(state, { payload }: { payload: UserState["userInfo"] }) {
      state.userInfo = payload;
    }
  }
});

// 导出 action
export const { setToken, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
