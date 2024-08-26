import { LOGIN_URL } from "@/constants/pageUrl";
import SvgIcon from "@repo/ui/components/SvgIcon";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();
  const toLogin = () => navigate(LOGIN_URL);

  return (
    <div className="flex items-center justify-between">
      <div className="relative flex items-center space-x-4">
        <div className="absolute left-0 top-[-16px] md:top-[-7px]">
          <SvgIcon name="chatbot" iconStyle={{ width: "40px", height: "40px" }} />
        </div>
        <div className="hidden pl-9 text-2xl font-extrabold md:block">Chatbot</div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="space-x-4 md:space-x-8 md:text-lg">
          <Button type="text" className="cursor-pointer">
            Docs
          </Button>
        </div>
        <div className="flex space-x-4">
          <Button className="font-bold" onClick={toLogin}>
            Login
          </Button>
          <Button type="primary" className="font-bold" onClick={toLogin}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
