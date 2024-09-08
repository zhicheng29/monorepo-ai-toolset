import { RouteObjectType } from "@/router/interface";

export interface UserState {
  token: string;
  userInfo: { name: string };
}

export interface AuthState {
  authMenuList: RouteObjectType[];
}
