import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setTheme } from "@/redux/modules/theme";

const CollapsedIcon: React.FC = () => {
  const { isCollapsed } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const changeCollapsed = (collapsed: boolean) => {
    dispatch(setTheme({ key: "isCollapsed", value: collapsed }));
  };

  return (
    <div className="flex items-center">
      <Button
        type="text"
        size="large"
        icon={
          isCollapsed ? <MenuUnfoldOutlined style={{ fontSize: "24px" }} /> : <MenuFoldOutlined style={{ fontSize: "24px" }} />
        }
        onClick={() => changeCollapsed(!isCollapsed)}
      />
    </div>
  );
};

export default CollapsedIcon;
