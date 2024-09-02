import { Link } from "react-router-dom";
import SvgIcon from "@repo/ui/components/SvgIcon";
import { HOME_URL } from "@/constants/pageUrl";

const ChatContent: React.FC = () => {
  const title = import.meta.env.VITE_GLOB_APP_TITLE;

  return (
    <div className="flex items-center justify-center px-4 pt-4 h-[calc(100%-8rem)] overflow-y-auto overflow-x-hidden">
      <div></div>
      <div className="flex justify-center w-2/3">
        <Link to={HOME_URL} target="_blank">
          <div className="flex flex-col items-center mb-8 hover:opacity-50 cursor-pointer">
            <div className="mb-2">
              <SvgIcon name="chatbot" iconStyle={{ width: "70px", height: "70px" }} />
            </div>
            <div className="text-5xl font-bold">{title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ChatContent;
