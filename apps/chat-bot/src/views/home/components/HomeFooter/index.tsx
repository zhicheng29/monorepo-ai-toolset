const HomeFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <i className="iconfont icon-moon cursor-pointer text-3xl hover:opacity-50"></i>
      </div>
      <div className="text-center">
        <div className="text-lg">
          <span>Built by </span>
          <span className=" cursor-pointer hover:opacity-50">wangzhicheng</span>
        </div>
      </div>
      <div className="flex space-x-3">
        <i className="iconfont icon-github cursor-pointer text-3xl hover:opacity-50"></i>
      </div>
    </div>
  );
};
export default HomeFooter;
