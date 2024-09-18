import { useAppDispatch, useAppSelector } from "@/redux";
import { setTheme } from "@/redux/modules/theme";

import { Button } from "antd";

import { MouseEventHandler, type CSSProperties } from "react";

type SwitchDarkPropType = {
  size?: "large" | "small" | "middle";
  iconStyle?: CSSProperties;
};

const SwitchDarkCom: React.FC<SwitchDarkPropType> = ({ size = "middle", iconStyle }) => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.theme);

  const changeTheme = () => {
    const root = document.documentElement;
    // 移除 dark 或 light 类
    root.classList.remove(isDark ? "dark" : "light");
    // 添加 dark 或 light 类
    root.classList.add(isDark ? "light" : "dark");
    dispatch(setTheme({ key: "isDark", value: !isDark }));
  };

  // 切换主题函数
  const toggleTheme: MouseEventHandler<HTMLElement> = event => {
    if (!document.startViewTransition) {
      // 当前浏览器不支持此api
      changeTheme();
      return;
    }

    const transition = document.startViewTransition(() => changeTheme());

    transition.ready.then(() => {
      const x = event.clientX;
      const y = event.clientY;
      // 圆形遮罩动画的结束半径
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const cliPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...cliPath].reverse() : cliPath // 根据主题切换动画的路径
        },
        {
          duration: 400,
          easing: "ease-in",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
        }
      );
    });
  };

  return (
    <Button
      size={size}
      type="text"
      onClick={toggleTheme}
      icon={<i className={["iconfont", isDark ? "icon-sun" : "icon-moon"].join(" ")} style={iconStyle} />}
    />
  );
};

export default SwitchDarkCom;
