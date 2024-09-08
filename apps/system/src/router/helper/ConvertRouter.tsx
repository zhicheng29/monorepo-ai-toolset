import { lazy } from "react";
import { getFlatMenuList } from "@/utils";
import { Navigate } from "react-router-dom";
import { RouteObjectType } from "../interface";
import RouterGuard from "./RouterInterception";
import LayoutContainer from "@/layout";
import LazyComponent from "@/components/LazyComponent";

const modules = import.meta.glob("@/views/**/*.tsx") as Record<string, Parameters<typeof lazy>[number]>;

export const convertToDynamicRouterFormat = (authMenuList: RouteObjectType[]) => {
  const flatMenuList = getFlatMenuList(authMenuList);

  const handleMenuList = flatMenuList.map(item => {
    item.children && delete item.children;

    if (item.redirect) item.element = <Navigate to={item.redirect} />;

    if (item.element && typeof item.element == "string") {
      const Component = LazyComponent(lazy(modules["/src/views" + item.element + ".tsx"]));
      item.element = <RouterGuard>{Component}</RouterGuard>;
    }

    item.loader = () => {
      return { ...item.meta, redirect: !!item.redirect };
    };
    return item;
  });

  const dynamicRouter: RouteObjectType[] = [{ element: <LayoutContainer />, children: [] }];

  handleMenuList.forEach(item => {
    if (item.meta?.isFull) dynamicRouter.push(item);
    else dynamicRouter[0].children?.push(item);
  });

  return dynamicRouter;
};
