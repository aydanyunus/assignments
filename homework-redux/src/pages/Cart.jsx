import ProductList from "../components/ProductList/ProductList";

const Cart = ({ products, onClick, handleFav, removeFav, favorites, handleAction }) => {
  

  return (
    <div className="container">
      <ProductList
        products={products}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
        isInCart ={true}
        handleAction={handleAction}
      />
    </div>
  );
};

export default Cart;
