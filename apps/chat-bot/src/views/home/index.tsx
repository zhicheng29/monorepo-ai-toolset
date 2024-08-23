import HomeHeader from "./components/HomeHeader";
import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";

const Home: React.FC = () => {
  return (
    <div className="flex h-dvh flex-col items-center overflow-x-auto">
      <div className="flex h-[100vh] w-[100vw] flex-col p-6">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
