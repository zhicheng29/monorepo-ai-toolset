import { useOutlet } from "react-router-dom";

const LayoutMain: React.FC = () => {
  const outlet = useOutlet();
  return (
    <>
      <div>{outlet}</div>
    </>
  );
};
export default LayoutMain;
