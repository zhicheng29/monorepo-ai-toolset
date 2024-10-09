import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SiderContainer: React.FC = () => {
  return (
    <div className="pl-2 py-2 h-ful">
      <div className="h-full  px-1.5 py-4 border rounded-xl bg-white flex flex-col items-center">
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        SiderContainer
      </div>
    </div>
  );
};

export default SiderContainer;
