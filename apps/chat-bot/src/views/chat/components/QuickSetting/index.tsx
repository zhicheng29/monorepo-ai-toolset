import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0"
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1"
  },
  {
    type: "divider"
  },
  {
    label: "3rd menu item",
    key: "3"
  }
];
const QuickSetting: React.FC = () => {
  return (
    <div className="h-full p-2 flex items-center justify-between">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button
          type="text"
          size="large"
          iconPosition="end"
          className="text-lg font-bold p-2 hover:opacity-50"
          icon={<i className="iconfont icon-down" />}
        >
          Quick Settings
        </Button>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button
          type="text"
          size="large"
          iconPosition="end"
          className="text-lg font-bold p-4 hover:opacity-50"
          icon={<i className="iconfont icon-adjustments" />}
        >
          gpt-4-turbo-preview
        </Button>
      </Dropdown>
    </div>
  );
};
export default QuickSetting;
