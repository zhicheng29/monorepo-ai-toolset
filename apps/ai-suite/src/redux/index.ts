import { useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";

import theme from "./modules/theme";
import auth from "./modules/auth";
import user from "./modules/user";
import tab from "@/redux/modules/tabs";

import type { TypedUseSelectorHook } from "react-redux";
import type { Middleware } from "@reduxjs/toolkit";

const reducer = combineReducers({ theme, user, auth, tab });

const persistConfig = {
  key: "redux-state",
  storage: storage,
  blacklist: ["auth"]
};

// 缓存
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 中间件
const middlewares: Middleware[] = [thunk];

export const store = configureStore({
  reducer: persistReducerConfig,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: true
});

// 创建持久化 store
export const persist = persistStore(store);

// 全局定义 dispatch 和 state 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
