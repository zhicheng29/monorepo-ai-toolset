import { useRef } from "react";
import { Avatar, Dropdown } from "antd";
import { EditOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import UserInfoModal from "./UserInfoModal";
import PasswordModal from "./PasswordModal";

import type { MenuProps } from "antd";
import type { UserInfoModalRef } from "./UserInfoModal";
import type { PasswordModalRef } from "./PasswordModal";

const AvatarCom: React.FC = () => {
  const userInfoRef = useRef<UserInfoModalRef>(null);
  const passwordRef = useRef<PasswordModalRef>(null);

  const items: MenuProps["items"] = [
    {
      key: "userInfo",
      label: <span>个人信息</span>,
      icon: <UserOutlined />,
      onClick: () => userInfoRef.current?.showModal()
    },
    {
      key: "editPass",
      label: <span>修改密码</span>,
      icon: <EditOutlined />,
      onClick: () => passwordRef.current?.showModal()
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
    <>
      <Dropdown menu={{ items }} arrow>
        <Avatar
          className="cursor-pointer ml-2"
          size={36}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?undefined"
        />
      </Dropdown>
      <UserInfoModal ref={userInfoRef} />
      <PasswordModal ref={passwordRef} />
    </>
  );
};

export default AvatarCom;
