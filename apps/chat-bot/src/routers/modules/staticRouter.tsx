import Login from "@/views/login/index";
import Home from "@/views/home/index";
import { HOME_URL, LOGIN_URL } from "@/constants/pageUrl";

import type { RouteObjectType } from "@/routers/interface";

export const staticRouter: RouteObjectType[] = [
  {
    path: HOME_URL,
    element: <Home />
  },
  {
    path: LOGIN_URL,
    element: <Login />,
    meta: {
      title: "登录"
    }
  }
];