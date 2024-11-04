import { createBrowserRouter, createHashRouter, RouterProvider as Router } from "react-router-dom";
import { staticRouter } from "./modules/staticRouter";

import type { RouteObject } from "react-router-dom";

const mode = import.meta.env.VITE_ROUTER_MODE;

const RouterProvider: React.FC = () => {
  const routerMode = {
    hash: () => createHashRouter(staticRouter as RouteObject[]),
    history: () => createBrowserRouter(staticRouter as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
