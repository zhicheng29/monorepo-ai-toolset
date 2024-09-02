import { useState } from "react";
import FormHeader from "./components/FromHeader";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="w-[32rem] py-10 px-20 rounded-3xl shadow-[0_0px_5px_1px_rgba(0,0,0,0.1)]">
        <FormHeader />
        {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <RegisterForm setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
};
export default Login;
