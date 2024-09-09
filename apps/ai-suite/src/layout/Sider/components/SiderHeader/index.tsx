import SvgIcon from "@repo/ui/components/SvgIcon";

const SiderHeader: React.FC = () => {
  const systemName = import.meta.env.VITE_APP_TITLE;
  return (
    <div className="h-[80px] flex justify-center items-center px-5">
      <SvgIcon name="ai_toolset" iconStyle={{ width: "40px", height: "40px" }}></SvgIcon>
      <div className="text-3xl font-black font-family-sourceSansPro ml-4">{systemName}</div>
    </div>
  );
};

export default SiderHeader;
