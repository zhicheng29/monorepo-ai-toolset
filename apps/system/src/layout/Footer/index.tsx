import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer: React.FC = () => {
  return (
    <Footer className="container-bg h-8 p-0 flex justify-center items-center">
      <div className="text-gray-500">
        <span>Copyright © 2023-2024 </span>
        <span className="cursor-pointer hover:opacity-50">zhicheng29</span>
      </div>
    </Footer>
  );
};

export default FooterContainer;
