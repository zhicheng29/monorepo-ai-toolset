import { Navigate } from "react-router-dom";
import Login from "@/views/login/index";
import RouterGuard from "../helper/RouterGuard";
import { HOME_URL, LOGIN_URL } from "@/constants/pageUrl";

import type { RouteObjectType } from "@/router/interface";

import Home from "@/views/home";
import DataCentre from "@/views/dataCentre";

export const staticRouter: RouteObjectType[] = [
  {
    path: "/",
    element: <Navigate to={HOME_URL} />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: LOGIN_URL,
    element: <Login />,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/dataCentre",
    element: <DataCentre />,
    meta: {
      title: "数据中心"
    }
  }
];

export const wrappedStaticRouter = staticRouter.map(item => {
  return {
    ...item,
    element: <RouterGuard>{item.element}</RouterGuard>,
    loader: () => {
      return { ...item.meta };
    }
  };
});
