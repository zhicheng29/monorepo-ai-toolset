import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { TabPropType } from "../interface";

const initialTabsState: TabPropType[] = [];

const tabSlice = createSlice({
  name: "tabs",
  initialState: initialTabsState,
  reducers: {
    setTabsList(_state, { payload }: PayloadAction<TabPropType[]>) {
      return payload;
    },
    addTabItem(state, { payload }: PayloadAction<TabPropType>) {
      if (state.every(item => item.path !== payload.path)) {
        state.push(payload);
      }
    },
    deleteTabItem(state, { payload }: PayloadAction<{ path: string; current: boolean }>) {
      if (payload.current) {
        const index = state.findIndex(item => item.path === payload.path);
        const nextTabPath = state[index + 1]?.path || state[index - 1]?.path;
        window.$navigate(nextTabPath);
      }
      return state.filter(item => item.path !== payload.path);
    }
  }
});

export const { setTabsList, addTabItem, deleteTabItem } = tabSlice.actions;
export default tabSlice.reducer;
