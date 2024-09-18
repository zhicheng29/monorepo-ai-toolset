import { Badge, Button } from "antd";

const NoticeCom: React.FC = () => {
  return (
    <Badge count={5} offset={[-8, 8]} size="small">
      <Button type="text" size="large" icon={<i className="iconfont icon-notice" style={{ fontSize: "24px" }} />} />
    </Badge>
  );
};

export default NoticeCom;
