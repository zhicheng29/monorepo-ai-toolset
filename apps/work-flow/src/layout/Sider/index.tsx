import { Avatar, Button, Divider } from "antd";
import { PlusCircleOutlined, UserOutlined } from "@ant-design/icons";

const SiderContainer: React.FC = () => {
  return (
    <div className="pl-2 py-2 h-ful">
      <div className="h-full  px-1.5 py-4 border rounded-xl bg-white flex flex-col items-center">
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        <Button className="mt-4" type="text" size="large" icon={<PlusCircleOutlined />} />
        <Divider className="my-4" />
      </div>
    </div>
  );
};

export default SiderContainer;
