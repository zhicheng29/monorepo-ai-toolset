import { useAppSelector } from "@/redux";
import { RouteObjectType } from "@/router/interface";
import { Menu } from "antd";

import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const SiderMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useAppSelector(state => state.theme);
  const menuList = useAppSelector(state => state.auth.authMenuList);

  const [selectKeys, setSelectKeys] = useState<string[]>([]);

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ) => {
    return { label, key, icon, children, type } as MenuItem;
  };

  const handleMenuFormat = (menu: RouteObjectType[]): MenuItem[] => {
    return menu.map(item => {
      return item.children?.length
        ? getItem(item.meta?.title, item.path, <i className={`iconfont ${item.meta!.icon!}`} />, handleMenuFormat(item.children))
        : getItem(item.meta?.title, item.path, <i className={`iconfont ${item.meta!.icon!}`} />);
    });
  };

  const authMenuList = handleMenuFormat(menuList);

  const onClick: MenuProps["onClick"] = e => {
    const { key } = e;
    navigate(key);
  };

  useEffect(() => {
    const path = location.pathname;
    setSelectKeys([path]);
  }, [location]);

  return (
    <Menu
      className="border-0 h-[calc(100% - 60px)]"
      mode="inline"
      onClick={onClick}
      theme={isDark ? "dark" : "light"}
      selectedKeys={selectKeys}
      items={authMenuList}
    />
  );
};

export default SiderMenu;
