import { useOutlet } from "react-router-dom";
import { Card, Layout } from "antd";

import "./index.less";

const { Content } = Layout;

const MainContainer: React.FC = () => {
  const outlet = useOutlet();
  return (
    <Content className="p-4 main-container">
      <Card>{outlet}</Card>
    </Content>
  );
};

export default MainContainer;
