import SvgIcon from "@repo/ui/components/SvgIcon";
import { Button } from "antd";

const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex items-center space-x-4">
        <div className="absolute left-0 top-[-16px] md:top-[-4px]">
          <SvgIcon name="chatbot" iconStyle={{ width: "40px", height: "40px" }} />
        </div>
        <div className="hidden pl-9 text-2xl font-extrabold md:block">Chatbot</div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="space-x-4 md:space-x-8 md:text-lg">
          <div className="cursor-pointer hover:opacity-50">Docs</div>
        </div>
        <div className="flex space-x-4">
          <Button className="font-bold">Login</Button>
          <Button type="primary" className="font-bold">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
