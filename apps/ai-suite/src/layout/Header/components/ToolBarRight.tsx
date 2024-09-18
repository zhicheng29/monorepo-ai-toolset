import SwitchDarkCom from "@/components/SwitchDark";
import LanguageCom from "@/components/Language";
import SearchCom from "./Search";
import NoticeCom from "./Notice";
import FullScreenCom from "./FullScreen";
import AvatarCom from "./Avatar";

const ToolBarRight: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <SearchCom />
      <NoticeCom />
      <LanguageCom size="large" iconStyle={{ fontSize: "24px" }} />
      <SwitchDarkCom size="large" iconStyle={{ fontSize: "24px" }} />
      <FullScreenCom />
      <AvatarCom />
    </div>
  );
};

export default ToolBarRight;
