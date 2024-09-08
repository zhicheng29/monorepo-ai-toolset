import { Link } from "react-router-dom";
import SvgIcon from "@repo/ui/components/SvgIcon";

import { HOME_URL } from "@/constants/pageUrl";

const FormHeader: React.FC = () => {
  const title = import.meta.env.VITE_APP_TITLE;

  return (
    <Link to={HOME_URL} target="_blank">
      <div className="flex flex-col items-center mb-8 hover:opacity-50 cursor-pointer">
        <div className="mb-2">
          <SvgIcon name="chatbot" iconStyle={{ width: "60px", height: "60px" }} />
        </div>
        <div className="text-4xl font-bold tracking-wide">{title}</div>
      </div>
    </Link>
  );
};

export default FormHeader;
