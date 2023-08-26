import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const products = useSelector((state) => state.products.products);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.sku)
  );


  return (
    <div className="container">
      <ProductList products={favoriteProducts} />
    </div>
  );
};

export default Favorites;
