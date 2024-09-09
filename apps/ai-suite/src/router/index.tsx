import { useEffect, useState } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider as Router } from "react-router-dom";

import { useAppSelector } from "@/redux";
import usePermission from "@/hooks/usePermission";
import useTheme from "@/hooks/useTheme";
import useMessage from "@/hooks/useMessage";
import { convertToDynamicRouterFormat } from "./helper/ConvertRouter";
import { wrappedStaticRouter } from "./modules/staticRouter";

// import NotFound from "@/components/Error/404.tsx";

import type { RouteObject } from "react-router-dom";
import type { RouteObjectType } from "./interface";

const mode = import.meta.env.VITE_ROUTER_MODE;

const RouterProvider: React.FC = () => {
  useTheme();
  useMessage();

  const { initPermission } = usePermission();
  const token = useAppSelector(state => state.user.token);
  const authMenuList = useAppSelector(state => state.auth.authMenuList);
  const [routerList, setRouterList] = useState<RouteObjectType[]>(wrappedStaticRouter);

  useEffect(() => {
    if (!authMenuList.length) {
      initPermission(token);
      return;
    }
    const dynamicRouter = convertToDynamicRouterFormat(authMenuList);
    const allRouter = [...wrappedStaticRouter, ...dynamicRouter];

    setRouterList(allRouter);
  }, [authMenuList]);

  const routerMode = {
    hash: () => createHashRouter(routerList as RouteObject[]),
    history: () => createBrowserRouter(routerList as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
