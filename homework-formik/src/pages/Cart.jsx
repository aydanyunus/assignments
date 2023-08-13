import UserForm from "../components/Form/Form";
import ProductList from "../components/ProductList/ProductList";

const Cart = ({
  products,
  onClick,
  handleFav,
  removeFav,
  favorites,
  handleAction,
}) => {
  return (
    <div className="container">
      {products.length ? (
        <>
          <ProductList
            products={products}
            onClick={onClick}
            handleFav={handleFav}
            favorites={favorites}
            removeFav={removeFav}
            isInCart={true}
            handleAction={handleAction}
          />
          <h1 className="checkout-title">Proceed to checkout</h1>
          <UserForm products={products} />
        </>
      ) : (
        <h1 className="no-items-title">No items added to cart</h1>
      )}
    </div>
  );
};

export default Cart;
