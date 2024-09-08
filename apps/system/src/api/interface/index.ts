import type { RouteObjectType } from "@/router/interface";

export interface ResponseType<T> {
  code: number;
  data: T;
  msg: string;
}

export interface AuthState {
  authMenuList: RouteObjectType[];
}
