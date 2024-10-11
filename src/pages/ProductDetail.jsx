import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Xatolik: ", error));
  }, [id]);

  if (loading) return <p className="text-center text-xl">Yuklanmoqda...</p>;
  if (!product)
    return <p className="text-center text-xl">Mahsulot topilmadi.</p>;

  return (
    <div className="container mx-auto my-10">
      <div
        style={{
          width: "680px",
          height: "480px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "16px",
          marginLeft: "8px",
        }}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-semibold text-blue-500 text-lg">
            Narx: ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
