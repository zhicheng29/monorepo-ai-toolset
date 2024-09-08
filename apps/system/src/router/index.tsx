import { useEffect, useState } from "react";
import usePermission from "@/hooks/usePermission";
import { createBrowserRouter, createHashRouter, RouterProvider as Router } from "react-router-dom";

import { useAppSelector } from "@/redux";
import { convertToDynamicRouterFormat } from "./helper/ConvertRouter";
import { wrappedStaticRouter } from "./modules/staticRouter";

// import NotFound from "@/components/Error/404.tsx";

import type { RouteObject } from "react-router-dom";
import type { RouteObjectType } from "./interface";

const mode = import.meta.env.VITE_ROUTER_MODE;

// 1. 接口请求 2. redux
const RouterProvider: React.FC = () => {
  const [routerList, setRouterList] = useState<RouteObjectType[]>(wrappedStaticRouter);
  const { initPermission } = usePermission();

  const token = useAppSelector(state => state.user.token);
  const authMenuList = useAppSelector(state => state.auth.authMenuList);

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
