import React, { useState, useEffect } from "react";

import { Button } from "antd";

import { points } from "@/constants/botPoint";

const HomeContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 开始淡出当前文本
      setFade(false);
      setTimeout(() => {
        // 等待动画结束后切换文本并淡入新文本
        setCurrentIndex(prevIndex => (prevIndex + 1) % points.length);
        setFade(true);
      }, 500);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [points.length]);

  return (
    <div className="flex grow flex-col items-center justify-center pb-20">
      <div className="text-7xl font-extrabold tracking-wide">Chatbot</div>
      <div
        className={`mt-2 text-lg font-bold transition-all duration-500 md:mt-6 md:text-2xl ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {points[currentIndex]}
      </div>
      <div className="mt-5 space-y-2 md:mt-6 md:space-x-4 md:space-y-0">
        <Button
          type="primary"
          size="large"
          icon={<i className="iconfont icon-right-arrow icon-for-reversal"></i>}
          iconPosition="end"
          className="font-bold"
        >
          Start Chatting
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
