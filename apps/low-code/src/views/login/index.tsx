import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigator = useNavigate();
  const toHome = () => navigator("/");

  return (
    <div>
      <div>Login</div>
      <Button onClick={toHome}>Home</Button>
    </div>
  );
};

export default Login;
