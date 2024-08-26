import { Link } from "react-router-dom";
import SvgIcon from "@repo/ui/components/SvgIcon";

import { HOME_URL } from "@/constants/pageUrl";

const FormHeader: React.FC = () => {
  const title = import.meta.env.VITE_GLOB_APP_TITLE;

  const toHome = () => {};

  return (
    <Link to={HOME_URL} target="_blank">
      <div className="flex flex-col items-center mb-8 hover:opacity-50 cursor-pointer" onClick={toHome}>
        <div className="mb-2">
          <SvgIcon name="chatbot" iconStyle={{ width: "40px", height: "40px" }} />
        </div>
        <div className="text-4xl font-bold tracking-wide">{title}</div>
      </div>
    </Link>
  );
};

export default FormHeader;
