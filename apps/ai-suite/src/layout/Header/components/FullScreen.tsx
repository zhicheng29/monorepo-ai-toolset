import { useLayoutEffect, useState } from "react";
import { Button } from "antd";

const FullScreen: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = () => {
    const html = document.documentElement;
    fullScreen ? document.exitFullscreen() : html.requestFullscreen();
  };

  const screenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };

  useLayoutEffect(() => {
    document.addEventListener("fullscreenchange", screenChange);
    return () => {
      document.removeEventListener("fullscreenchange", screenChange);
    };
  });

  return (
    <Button
      type="text"
      size="large"
      icon={
        <i
          className={`iconfont ${fullScreen ? "icon-exitFullScreen" : "icon-fullScreen"}`}
          style={{ fontSize: "24px" }}
          onClick={handleFullScreen}
        />
      }
    />
  );
};

export default FullScreen;
