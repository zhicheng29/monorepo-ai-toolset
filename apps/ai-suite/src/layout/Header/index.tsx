import { Layout } from "antd";
import ToolLeft from "./components/ToolLeft";
import ToolRight from "./components/ToolRight";

const { Header } = Layout;

const HeaderContainer: React.FC = () => {
  return (
    <Header className="container-bg flex px-4 h-[60px] border-b justify-between items-center">
      <ToolLeft />
      <ToolRight />
    </Header>
  );
};

export default HeaderContainer;
