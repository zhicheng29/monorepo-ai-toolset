import { Layout } from "antd";
import SiderHeader from "./components/SiderHeader";
import Menu from "./components/Menu";

import "./index.less";
import { useAppSelector } from "@/redux";

const { Sider } = Layout;

const SiderContainer: React.FC = () => {
  const { isCollapsed } = useAppSelector(state => state.theme);

  return (
    <Sider width={210} collapsible trigger={null} collapsed={isCollapsed} className="container-bg border-r">
      <SiderHeader />
      <Menu />
    </Sider>
  );
};

export default SiderContainer;
