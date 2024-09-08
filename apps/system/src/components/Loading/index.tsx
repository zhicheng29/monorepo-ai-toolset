import { useEffect } from "react";

import { Spin } from "antd";

export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Spin size="large" />
    </div>
  );
};

export const PageLoader: React.FC = () => {
  useEffect(() => {
    // NProgress.start();
    // return () => {
    //   NProgress.done();
    // };
  }, []);
  return <Loading />;
};
