import { useState } from "react";

import SvgIcon from "@repo/ui/components/SvgIcon";
import LoginHeader from "./components/LoginHeader";
import FormHeader from "./components/FormHeader";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import LoginBg from "@/assets/images/login_bg.png";
import "./index.less";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-dvh flex flex-1 items-center justify-center">
      <img src={LoginBg} className="fixed bottom-0 left-0 w-4/5 z-[-1]" />
      <div className="absolute grid grid-cols-2 gap-4 top-3 right-12">
        <LoginHeader />
      </div>
      <div className="w-full h-full grid grid-cols-2 gap-72 px-40 overflow-scroll">
        <div className="flex items-center justify-end">
          <SvgIcon name="login_container_bg" iconStyle={{ width: "80%", height: "100%" }} />
        </div>
        <div className="flex items-center">
          <div className="login-form w-[28rem] pt-10 px-10 min-w-80 rounded-3xl shadow-[0_0px_5px_1px_rgba(0,0,0,0.1)]">
            <FormHeader />
            {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <RegisterForm setIsLogin={setIsLogin} />}
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 text-gray-500">
        <span>Copyright © 2023-2024 </span>
        <span className="cursor-pointer hover:opacity-50">zhicheng29</span>
      </div>
    </div>
  );
};

export default Login;
