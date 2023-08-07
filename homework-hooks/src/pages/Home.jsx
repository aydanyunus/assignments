import ProductList from "../components/ProductList/ProductList";

const Home = ({ products, onClick, handleFav, favorites, removeFav }) => {
  return (
    <div className="container">
      <ProductList
        products={products}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
      />
    </div>
  );
};

export default Home;
