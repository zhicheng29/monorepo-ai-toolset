import { useAppSelector } from "@/redux";

import SvgIcon from "@repo/ui/components/SvgIcon";

const SiderHeader: React.FC = () => {
  const systemName = import.meta.env.VITE_APP_TITLE;
  const { isCollapsed, isDark } = useAppSelector(state => state.theme);

  return (
    <div className="border-default h-[55px] border-b px-5 flex shrink-0 justify-center items-center">
      <SvgIcon name={isDark ? "ai_suite_dark" : "ai_suite"} iconStyle={{ width: "40px", height: "40px" }} />
      {!isCollapsed && <div className="font-family-sourceSansPro text-3xl font-black ml-4 whitespace-nowrap">{systemName}</div>}
    </div>
  );
};

export default SiderHeader;
