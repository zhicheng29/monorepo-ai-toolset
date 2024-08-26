import React, { useState } from "react";
import { Layout, theme } from "antd";
import ChatList from "./components/ChatList";
import QuickSetting from "./components/QuickSetting";
import ChatContent from "./components/ChatContent";
import ChatInput from "./components/ChatInput";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout className="h-dvh">
      <Sider
        width="280"
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
        style={{ background: colorBgContainer }}
      >
        <ChatList />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <QuickSetting />
        </Header>
        <Content style={{ background: colorBgContainer }}>
          <ChatContent />
        </Content>
        <Footer style={{ padding: 0, background: colorBgContainer }}>
          <ChatInput />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
