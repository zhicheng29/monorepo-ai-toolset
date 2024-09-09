import { useOutlet } from "react-router-dom";
import { Card, Layout } from "antd";

const { Content } = Layout;

const MainContainer: React.FC = () => {
  const outlet = useOutlet();
  return (
    <Content className="p-4">
      <Card>{outlet}</Card>
    </Content>
  );
};

export default MainContainer;
