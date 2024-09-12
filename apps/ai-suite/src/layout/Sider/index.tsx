import { Layout } from "antd";
import SiderHeader from "./components/SiderHeader";
import SiderMenu from "./components/SiderMenu";

import "./index.less";
import { useAppSelector } from "@/redux";

const { Sider } = Layout;

const SiderContainer: React.FC = () => {
  const { isCollapsed } = useAppSelector(state => state.theme);

  return (
    <Sider
      width={210}
      collapsible
      trigger={null}
      collapsed={isCollapsed}
      className="container-bg sider-container border-default border-r"
    >
      <SiderHeader />
      <SiderMenu />
    </Sider>
  );
};

export default SiderContainer;
