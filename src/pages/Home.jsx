import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Carousel, Spin } from "antd";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Take the first 3 products for the slider
  const sliderImages = products.slice(0, 3);

  return (
    <div className="container mx-auto my-10">
      {/* Slider Section */}
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "400px" }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Carousel
          autoplay
          className="mb-10"
          style={{ width: "100%", height: "400px" }}
        >
          {sliderImages.map((product) => (
            <div key={product.id} className="relative h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover" // Ensures the image covers the container
                style={{ height: "400px", objectFit: "cover" }} // Added style to ensure correct fit
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      {/* Product Cards */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  className="object-cover h-48 w-full"
                />
              } // Card image styling
              className="shadow-lg transition-transform transform hover:scale-105"
              style={{ width: "280px", height: "300px" }} // Set card dimensions
            >
              <Card.Meta
                title={
                  product.title.length > 20
                    ? `${product.title.slice(0, 20)}...`
                    : product.title
                }
                description={`Narx: $${product.price}`}
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
