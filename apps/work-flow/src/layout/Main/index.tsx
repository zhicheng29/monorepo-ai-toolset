import { useOutlet } from "react-router-dom";
const MainContainer: React.FC = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default MainContainer;
