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
    <Layout className="h-dvh min-h-[500px]">
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
      <Layout className="relative">
        <Header className="h-auto p-0" style={{ background: colorBgContainer }}>
          <QuickSetting />
        </Header>
        <Content style={{ background: colorBgContainer, overflow: "auto" }}>
          <ChatContent />
        </Content>
        <Footer
          className="absolute flex justify-center bottom-10 p-0 w-1/2 left-[50%] right-[50%] translate-x-[-50%]"
          style={{ background: colorBgContainer }}
        >
          <ChatInput />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
