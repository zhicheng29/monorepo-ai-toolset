import { useEffect, useState } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider as Router } from "react-router-dom";
import { wrappedStaticRouter } from "./modules/staticRouter";
import { convertRouter } from "./helper/ConvertRouter";

import type { RouteObject } from "react-router-dom";
import type { RouteObjectType } from "./interface";

const mode = import.meta.env.VITE_ROUTER_MODE;

// todo 此处拦截未完成，authMenuList 在 RouterProvider 渲染之前必须有值，否则路由将命中失败
// 1. 接口请求 2. redux
const RouterProvider: React.FC = () => {
  const [routerList, setRouterList] = useState<RouteObjectType[]>(wrappedStaticRouter);

  useEffect(() => {
    console.log(routerList);
    const dynamicRouter = convertRouter([]);
    let allRouter = [...wrappedStaticRouter, ...dynamicRouter];
    allRouter.forEach(item => item.path === "*" && (item.element = <>1111</>));
    setRouterList(allRouter);
  }, []);

  const routerMode = {
    hash: () => createHashRouter(wrappedStaticRouter as RouteObject[]),
    history: () => createBrowserRouter(wrappedStaticRouter as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
