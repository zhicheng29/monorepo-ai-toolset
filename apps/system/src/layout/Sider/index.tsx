import { Layout } from "antd";
import SiderHeader from "./components/SiderHeader";
import Menu from "./components/Menu";

import "./index.less";

const { Sider } = Layout;

const SiderContainer: React.FC = () => {
  return (
    <Sider className="container-bg border-r w-[210px] max-w-[210px] min-w-[210px]">
      <SiderHeader />
      <Menu />
    </Sider>
  );
};

export default SiderContainer;
