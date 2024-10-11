import { Form, Input, Button, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;

    if (!username) {
      message.error("Iltimos, foydalanuvchi nomini kiriting!");
      return;
    }
    if (!password) {
      message.error("Iltimos, parolni kiriting!");
      return;
    }
    if (!/\d/.test(password)) {
      message.error("Parolda kamida bir raqam bo'lishi kerak!");
      return;
    }

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername === null || storedPassword === null) {
      message.error("Ro'yxatdan o'tmagan foydalanuvchi.");
      return;
    }

    if (username === storedUsername && password === storedPassword) {
      console.log("Login successful");
      message.success("Kirish muvaffaqiyatli!");
      navigate("/navbar");
    } else {
      message.error("Foydalanuvchi nomi yoki parol noto'g'ri!");
    }
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
