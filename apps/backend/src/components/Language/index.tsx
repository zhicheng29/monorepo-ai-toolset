import { Button, Dropdown } from "antd";

import type { MenuProps } from "antd";
import { CSSProperties, useState } from "react";

type LanguagePropType = {
  size?: "large" | "small" | "middle";
  iconStyle?: CSSProperties;
};

const LanguageCom: React.FC<LanguagePropType> = ({ size = "middle", iconStyle }) => {
  const [language, setLanguage] = useState("zh");

  const changeLanguage: MenuProps["onClick"] = val => {
    setLanguage(val.key);
  };

  const items: MenuProps["items"] = [
    { key: "zh", label: "简体中文", disabled: language === "zh" },
    { key: "en", label: "English", disabled: language === "en" }
  ];

  const menuProps = {
    items,
    onClick: changeLanguage
  };

  return (
    <Dropdown menu={menuProps} placement="bottom" arrow>
      <Button size={size} type="text" icon={<i className="iconfont icon-translate" style={iconStyle} />} />
    </Dropdown>
  );
};

export default LanguageCom;
