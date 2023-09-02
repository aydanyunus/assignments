import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import UserForm from "../components/Form/Form";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container">
      <div className="card-wrapper">
        {cart.length ? (
          <>
            <ProductList products={cart} isInCart={true} />
           
            <div className="form-wrapper">
              <h1 className="checkout-title">Proceed to checkout</h1>
              <UserForm />
            </div>
            
          </>
        ) : (
          <h1 className="no-items-title">No items added to cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
