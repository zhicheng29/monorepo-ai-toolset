import LanguageSelect from "@/components/LanguageSelect";
import SwitchDark from "@/components/SwitchDark";

const LoginHeader: React.FC = () => (
  <>
    <SwitchDark size="large" iconStyle={{ fontSize: "24px" }} />
    <LanguageSelect size="large" iconStyle={{ fontSize: "24px" }} />
  </>
);

export default LoginHeader;
