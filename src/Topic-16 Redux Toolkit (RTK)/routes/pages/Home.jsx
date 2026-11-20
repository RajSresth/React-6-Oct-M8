import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <div className="py-20 w-full max-w-300 mx-auto flex gap-14 justify-center items-center flex-wrap">
        {products.map((product) => (
          <ProductCard element={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
