import React from "react";
import { Button, Col, Form, Input, Row } from "antd";

interface RegisterFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setIsLogin }) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    toLogin();
  };

  const toLogin = () => setIsLogin(true);

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input placeholder="邮箱/手机号" />
      </Form.Item>
      <Form.Item>
        <Row gutter={8}>
          <Col span={17}>
            <Form.Item name="captcha" noStyle rules={[{ required: true }]}>
              <Input placeholder="验证码" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Button className="w-full">获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item name="password" hasFeedback>
        <Input.Password placeholder="新密码(4~16位)" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The new password that you entered do not match!"));
            }
          })
        ]}
      >
        <Input.Password placeholder="确认密码" />
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
        <Button className="w-full" type="primary" htmlType="submit">
          确认注册
        </Button>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="link" className="p-1" onClick={toLogin}>
          已有账号，去登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
