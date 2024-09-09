import { Layout } from "antd";

import SiderContainer from "./Sider";
import HeaderContainer from "./Header";
import MainContainer from "./Main";
import FooterContainer from "./Footer";
import TabdsContainer from "./Tabs";

const LayoutContainer: React.FC = () => {
  return (
    <Layout className="h-dvh">
      <SiderContainer />
      <Layout>
        <HeaderContainer />
        <TabdsContainer />
        <MainContainer />
        <FooterContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
