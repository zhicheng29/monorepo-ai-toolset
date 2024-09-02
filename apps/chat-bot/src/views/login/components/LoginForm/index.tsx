import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

interface LoginFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

type FieldType = {
  username: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ setIsLogin }) => {
  const onFinish: FormProps<FieldType>["onFinish"] = values => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const toRegister = () => setIsLogin(false);

  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item<FieldType> name="username">
        <Input placeholder="用户名/邮箱/手机号" />
      </Form.Item>
      <Form.Item<FieldType> name="password">
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <span>使用即代表你同意我们的</span>
        <Button type="link" className="p-1">
          服务协议
        </Button>
        <span>和</span>
        <Button type="link" className="p-1">
          隐私政策
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          登录
        </Button>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="link" className="p-1">
          忘记密码
        </Button>
        <span className="w-px h-full mx-1 border-r border-solid border-neutral-300"></span>
        <Button type="link" className="p-1" onClick={toRegister}>
          注册账号
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
