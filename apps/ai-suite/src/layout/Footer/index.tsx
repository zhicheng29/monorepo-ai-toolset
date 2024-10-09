import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer: React.FC = () => {
  return (
    <Footer className="container-bg h-8 p-0 flex justify-center items-center">
      <div className="text-gray-500 whitespace-nowrap">
        <span>Copyright © 2023-2024 By </span>
        <span className="cursor-pointer hover:opacity-50">zhicheng29</span>
        <a className="ml-6 hover:text-gray-500 hover:opacity-50" href="https://beian.miit.gov.cn/" target="_blank">
          赣ICP备2023002554号-2
        </a>
      </div>
    </Footer>
  );
};

export default FooterContainer;
