import SwitchDark from "@/components/SwitchDark";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderContainer: React.FC = () => {
  return (
    <Header className="container-bg">
      <SwitchDark />
    </Header>
  );
};

export default HeaderContainer;
