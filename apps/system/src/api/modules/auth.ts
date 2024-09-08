import RequestHttp from "@/api";
import type { AuthState } from "../interface";

// 权限相关
export const getAuthApi = () => {
  return RequestHttp.get<AuthState>("/initAuth");
};
