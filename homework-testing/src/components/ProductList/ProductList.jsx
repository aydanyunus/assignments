import "./product-list.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import { useContext } from "react";
import { SwitchContext } from "../../pages/Home";

const ProductList = ({ products, isInCart }) => {
  const currentView = useContext(SwitchContext);

  return (
    <div
      className={
        currentView === "list" ? "product-wrapper-list" : "products-wrapper"
      }
    >
      {products.map((product) => {
        return (
          <Product
            key={product.id ? product.id : product.sku}
            product={product}
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func,
};

ProductList.defaultProps = {
  products: [],
  favorites: [],
};

export default ProductList;
