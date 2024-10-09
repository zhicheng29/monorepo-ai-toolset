import Login from "@/views/login/index";
import Home from "@/views/home/index";
import Flow from "@/views/flow/index";
import { HOME_URL, LOGIN_URL } from "@/constants/pageUrl";

import type { RouteObjectType } from "@/router/interface";
import LayoutContainer from "@/layout";

export const staticRouter: RouteObjectType[] = [
  {
    element: <LayoutContainer />,
    children: [
      {
        path: HOME_URL,
        element: <Home />
      }
    ]
  },
  {
    element: <LayoutContainer />,
    children: [
      {
        path: "/flow",
        element: <Flow />
      }
    ]
  },
  {
    path: LOGIN_URL,
    element: <Login />
  }
];
