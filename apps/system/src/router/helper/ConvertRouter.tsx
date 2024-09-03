import { lazy } from "react";
import { Navigate } from "react-router-dom";
import LayoutContainer from "@/layout";
import LazyComponent from "@/components/LazyComponent";
import RouterGuard from "./RouterGuard";
import { getFlatMenuList } from "@/utils";

import type { RouteObjectType } from "../interface";

// * 所有 views 下的所有目录都将作为路由组件
const routerModules = import.meta.glob("@/views/**/*.tsx") as Record<string, Parameters<typeof lazy>[number]>;

export const convertRouter = (authMenuList: RouteObjectType[]) => {
  // 扁平化
  const flatMenuList = getFlatMenuList(authMenuList);
  // 转换路由菜单
  const handleMenuList = flatMenuList.map(item => {
    item.children && delete item.children;
    // 处理重定向
    if (item.redirect) item.element = <Navigate to={item.redirect} />;
    // 转换组件
    if (item.element && typeof item.element === "string") {
      const componentUrl = "/src/views" + item.element + ".tsx";
      const Component = LazyComponent(lazy(routerModules[componentUrl]));
      item.element = <RouterGuard>{Component}</RouterGuard>;
    }
    // loader
    item.loader = () => {
      return { ...item.meta, redirect: !!item.redirect };
    };
    return item;
  });
  // layout
  const dynamicRouter: RouteObjectType[] = [{ element: <LayoutContainer />, children: [] }];
  // 添加动态路由到 layout 的 children 中
  handleMenuList.forEach(item => {
    if (item.meta?.isFull) {
      dynamicRouter.push(item);
    } else {
      dynamicRouter[0].children?.push(item);
    }
  });

  return dynamicRouter;
};
