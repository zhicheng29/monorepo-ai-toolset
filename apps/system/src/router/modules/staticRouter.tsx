import { Navigate } from "react-router-dom";

import RouterInterception from "../helper/RouterInterception";
import { Loading } from "@/components/Loading";

import Login from "@/views/login/index";

import { HOME_URL, LOGIN_URL } from "@/constants/pageUrl";

import type { RouteObjectType } from "@/router/interface";

export const staticRouter: RouteObjectType[] = [
  {
    path: "/",
    element: <Navigate to={HOME_URL} />
  },
  {
    path: LOGIN_URL,
    element: <Login />,
    meta: {
      title: "登录"
    }
  },
  {
    path: "*",
    element: <Loading />
  }
];

export const wrappedStaticRouter = staticRouter.map(item => {
  return {
    ...item,
    element: <RouterInterception>{item.element}</RouterInterception>,
    loader: () => {
      return { ...item.meta };
    }
  };
});
