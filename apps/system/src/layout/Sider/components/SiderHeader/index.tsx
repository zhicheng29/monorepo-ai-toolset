import SvgIcon from "@repo/ui/components/SvgIcon";

const SiderHeader: React.FC = () => {
  const systemName = import.meta.env.VITE_APP_TITLE;
  return (
    <div className="h-[60px] flex justify-between items-center px-3 border-b">
      <SvgIcon name="ai_toolset" iconStyle={{ width: "40px", height: "40px" }}></SvgIcon>
      <div className="text-2xl font-bold font-mono">{systemName}</div>
    </div>
  );
};

export default SiderHeader;
