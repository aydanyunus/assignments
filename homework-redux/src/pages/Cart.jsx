import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);


  return (
    <div className="container">
      <ProductList
        products={cart}
        isInCart={true}
      />
    </div>
  );
};

export default Cart;
