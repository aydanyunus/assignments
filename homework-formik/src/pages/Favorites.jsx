import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);


  return (
    <div className="container">
      <ProductList products={favorites} />
    </div>
  );
};

export default Favorites;
