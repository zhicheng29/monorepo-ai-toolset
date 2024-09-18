import { useAppSelector } from "@/redux";

import type { RootState } from "@/redux";
import { useEffect } from "react";
import { MetaProps } from "../interface";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { HOME_URL, LOGIN_URL } from "@/constants/pageUrl";

interface RouteInterceptionProps {
  children: React.ReactNode;
}

const RouteInterception: React.FC<RouteInterceptionProps> = props => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  window.$navigate = navigate;

  const token = useAppSelector((state: RootState) => state.user.token);
  const authMenuList = useAppSelector((state: RootState) => state.auth.authMenuList);

  useEffect(() => {
    const meta = loader as MetaProps;
    const isLoginPage = pathname === LOGIN_URL;

    if (meta) {
      const title = import.meta.env.VITE_APP_TITLE;
      document.title = meta?.title ? `${meta.title} - ${title}` : title;
    }

    if (authMenuList.length && token && isLoginPage) {
      return navigate(HOME_URL);
    }

    if ((!token && !isLoginPage) || (!authMenuList.length && !token && !isLoginPage)) {
      return navigate(LOGIN_URL, { replace: true });
    }
  }, [loader]);

  return props.children;
};

export default RouteInterception;
