import ProductList from "../components/ProductList/ProductList";

const Cart = ({ products, onClick, handleFav, removeFav, favorites }) => {
  

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

export default Cart;
