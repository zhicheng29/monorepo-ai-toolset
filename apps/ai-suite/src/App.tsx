import React, { useEffect } from "react";

import RouterProvider from "@/router";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setTheme } from "@/redux/modules/theme";
import { getSystemLanguage } from "@/utils";

import { ConfigProvider, theme, App as AppProvider } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language, isDark } = useAppSelector(state => state.theme);

  // 初始化主题算法
  const initAlgorithm = () => {
    return isDark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];
  };

  // 初始化语言
  const initLanguage = () => {
    const systemLanguage = language ?? getSystemLanguage();
    dispatch(setTheme({ key: "language", value: systemLanguage }));
    dayjs.locale(language === "zh" ? "zh-cn" : "en");
  };

  useEffect(() => {
    initLanguage();
  });

  return (
    <ConfigProvider
      locale={language === "zh" ? zhCN : enUS}
      theme={{ algorithm: initAlgorithm(), cssVar: { prefix: "suite" }, hashed: false }}
    >
      <AppProvider>
        <RouterProvider />
      </AppProvider>
    </ConfigProvider>
  );
};
export default App;
