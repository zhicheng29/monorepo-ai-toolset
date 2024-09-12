import SwitchDark from "@/components/SwitchDark";
import NoticeButton from "./Notice";
import FullScreen from "./FullScreen";

const ToolBarRight: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <SwitchDark size="large" iconStyle={{ fontSize: "24px" }} />
      <NoticeButton />
      <FullScreen />
    </div>
  );
};

export default ToolBarRight;
