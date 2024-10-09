import Main from "./Main";
import Sider from "./Sider";

const LayoutContainer: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] w-full h-full flex">
      <Sider />
      <Main />
    </div>
  );
};

export default LayoutContainer;
