import bgURl from "@/assets/images/bg.svg";

const Login: React.FC = () => {
  return (
    <div className="h-dvh">
      <div className="flex items-center justify-center">
        <div className="left-bg"></div>
        <div className="header"></div>
        <div className="flex w-full h-full mx-auto">
          <div className="basis-1/3">
            <img src={bgURl} />
          </div>
          <div className="basis-1/3"></div>
        </div>
        <div className="copyright"></div>
      </div>
    </div>
  );
};

export default Login;
