import { Layout } from "antd";
import ToolBarLeft from "./components/ToolBarLeft";
import ToolBarRight from "./components/ToolBarRight";

const { Header } = Layout;

const HeaderContainer: React.FC = () => {
  return (
    <Header className="container-bg border-default flex px-4 h-[60px] leading-[60px] border-b justify-between items-center">
      <ToolBarLeft />
      <ToolBarRight />
    </Header>
  );
};

export default HeaderContainer;
