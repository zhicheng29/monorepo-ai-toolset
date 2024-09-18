import { Avatar, Dropdown } from "antd";
import { EditOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";

// import avatarUrl from "@/assets/icons/ai_suite.svg";

import type { MenuProps } from "antd";

const AvatarCom: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "userInfo",
      label: <span>个人信息</span>,
      icon: <UserOutlined />,
      onClick: () => {}
    },
    {
      key: "editPass",
      label: <span>修改密码</span>,
      icon: <EditOutlined />,
      onClick: () => {}
    },
    {
      type: "divider"
    },
    {
      key: "logout",
      label: <span>退出登录</span>,
      icon: <LoginOutlined />,
      onClick: () => {}
    }
  ];
  return (
    <Dropdown menu={{ items }} arrow>
      <Avatar className="cursor-pointer ml-2" size={40} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    </Dropdown>
  );
};

export default AvatarCom;
