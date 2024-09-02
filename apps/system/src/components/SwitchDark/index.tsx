import { Button } from "antd";

import { useState, type CSSProperties } from "react";

type LanguageSelectPropType = {
  size?: "large" | "small" | "middle";
  iconStyle?: CSSProperties;
};

const SwitchDark: React.FC<LanguageSelectPropType> = ({ size = "middle", iconStyle }) => {
  const [dark, setDark] = useState(false);

  const changeDark = () => setDark(!dark);

  return (
    <Button
      size={size}
      type="text"
      onClick={changeDark}
      icon={<i className={["iconfont", dark ? "icon-sun" : "icon-moon"].join(" ")} style={iconStyle} />}
    />
  );
};

export default SwitchDark;
