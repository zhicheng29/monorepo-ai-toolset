import { RouteObjectType } from "@/router/interface";

export type LanguageType = "zh" | "en" | null;

export interface ThemeStateType {
  isDark: boolean;
  isCollapsed: boolean;
  language: LanguageType;
  themeColor: string;
}

export interface UserState {
  token: string;
  userInfo: { name: string };
}

export interface AuthState {
  authMenuList: RouteObjectType[];
}

// tab
export interface TabPropType {
  title: string;
  icon: string;
  path: string;
  closable: boolean;
}
