import LanguageCom from "@/components/Language";
import SwitchDarkCom from "@/components/SwitchDark";

const LoginHeader: React.FC = () => (
  <>
    <SwitchDarkCom size="large" iconStyle={{ fontSize: "24px" }} />
    <LanguageCom size="large" iconStyle={{ fontSize: "24px" }} />
  </>
);

export default LoginHeader;
