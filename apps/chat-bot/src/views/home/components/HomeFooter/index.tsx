import { Button } from "antd";

const HomeFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button type="text" size="large" icon={<i className="iconfont icon-moon text-3xl hover:opacity-50" />} />
      </div>
      <div className="text-center">
        <div className="text-lg">
          <span>Built by </span>
          <span className=" cursor-pointer hover:opacity-50">wangzhicheng</span>
        </div>
      </div>
      <div className="flex space-x-3">
        <Button type="text" size="large" icon={<i className="iconfont icon-github text-3xl hover:opacity-50" />} />
      </div>
    </div>
  );
};
export default HomeFooter;
