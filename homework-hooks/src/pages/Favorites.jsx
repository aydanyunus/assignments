import ProductList from "../components/ProductList/ProductList";

const Favorites = ({ products, onClick, handleFav, favorites, removeFav }) => {
  const favoriteProducts = products.filter(product => favorites.includes(product.sku));

  return (
    <div className="container">
      <ProductList
        products={favoriteProducts}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
      />
    </div>
  );
};

export default Favorites;
