import { useAppSelector } from "@/redux";

import SvgIcon from "@repo/ui/components/SvgIcon";

const SiderHeader: React.FC = () => {
  const systemName = import.meta.env.VITE_APP_TITLE;
  const { isCollapsed } = useAppSelector(state => state.theme);

  return (
    <div className="h-[60px] flex border-b px-5 justify-center items-center">
      <SvgIcon name="ai_toolset" iconStyle={{ width: "40px", height: "40px" }} />
      {!isCollapsed && <div className="text-3xl font-black font-family-sourceSansPro ml-4">{systemName}</div>}
    </div>
  );
};

export default SiderHeader;
