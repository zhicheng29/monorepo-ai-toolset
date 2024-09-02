import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigator = useNavigate();
  const toLogin = () => navigator("/login");

  return (
    <div>
      <div>Home</div>
      <Button onClick={toLogin}>Login</Button>
    </div>
  );
};

export default Home;
