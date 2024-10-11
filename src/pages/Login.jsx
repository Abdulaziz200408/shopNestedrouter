import { Form, Input, Button, Card } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-5">Kirish</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Iltimos, foydalanuvchi nomini kiriting!",
              },
            ]}
          >
            <Input placeholder="Foydalanuvchi nomi" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Iltimos, parolni kiriting!" }]}
          >
            <Input.Password placeholder="Parol" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Kirish
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center">
          <Link to="/register" className="text-blue-500 hover:underline">
            Ro'yxatdan o'tish
          </Link>
          <span className="mx-2">|</span>
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Parolni unuting?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
