import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    // API Calling
    const getProducts = async () => {
        try {
            const {data, status} = await axios.get("https://dummyjson.com/products");      
            if(status >= 200 && status < 300)
            {
                setProducts(data.products);            
            }
        }
        catch (err) {
            if(err.code == "ERR_BAD_REQUEST")
                setError(err.message);           
        }    
        finally{
            setLoading(false);
        }  
    };

    getProducts();
  }, []);


  if(loading) return <Skeleton limit={30} />
  if(error) return <h1>{error}</h1>

  return (
    <div className="container">
      {
        // products = [ {}, {}, {}, {}, {} .......]
        products.map((element) => (
          <ProductCard key={element.id} element={element} />
        ))
      }
    </div>
  );
};

export default Home;
