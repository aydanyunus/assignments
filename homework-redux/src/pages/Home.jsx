import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";



const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="container">
      <ProductList
        products={products}    
      />
    </div>
  );
};

export default Home;
