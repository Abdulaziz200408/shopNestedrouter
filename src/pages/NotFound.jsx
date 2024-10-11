import { Button } from "antd";
import { Link } from "react-router-dom";
import notFoundGif from "../../public/7iJR.gif";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Bunday sahifa topilmadi.</p>
      <img
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
        src={notFoundGif}
        alt="Not Found"
        className=" mb-4"
      />
      <p className="text-lg mb-6">
        Sahifa topilmadi. Iltimos, boshqa sahifaga o'ting yoki bosh sahifaga
        qayting.
      </p>
      <Link to="/">
        <Button type="primary" size="large">
          Bosh sahifaga qaytish
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
