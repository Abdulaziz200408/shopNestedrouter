import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
      {loading ? (
        <p className="text-center text-xl font-semibold">Yuklanmoqda...</p>
      ) : (
        <>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Rasm</th>
                <th className="py-3 px-4 text-left">Nom</th>
                <th className="py-3 px-4 text-left">Tavsif</th>
                <th className="py-3 px-4 text-left">Narx</th>
                <th className="py-3 px-4 text-left">Batafsil</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-800">
                    {product.title.length > 20
                      ? product.title.slice(0, 20) + "..."
                      : product.title}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {product.description.length > 60
                      ? product.description.slice(0, 60) + "..."
                      : product.description}
                  </td>
                  <td className="py-4 px-4 font-semibold text-blue-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <Link to={`/product/${product.id}`}>
                      <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
                        Tafsilotlar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-center">
            {Array.from(
              { length: Math.ceil(products.length / productsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 border rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-blue-300"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
