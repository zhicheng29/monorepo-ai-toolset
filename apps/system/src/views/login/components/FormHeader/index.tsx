import SvgIcon from "@repo/ui/components/SvgIcon";

const FormHeader: React.FC = () => {
  const title = import.meta.env.VITE_GLOB_APP_TITLE;

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-2">
        <SvgIcon name="system" iconStyle={{ width: "60px", height: "60px" }} />
      </div>
      <div className="text-4xl font-bold tracking-wide">{title}</div>
    </div>
  );
};

export default FormHeader;
