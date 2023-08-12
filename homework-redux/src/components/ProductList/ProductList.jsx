import "./product-list.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";

const ProductList = ({ products, onClick, handleFav, favorites, removeFav, handleAction, isInCart }) => {
  return (
    <div className="products-wrapper">
      {products.map((product) => {
        return (
          <Product
            key={product.id ? product.id : product.sku}
            product={product}
            onClick={onClick}
            handleFav={handleFav}
            favorites={favorites}
            removeFav={removeFav}
            isInCart={isInCart}
            handleAction={handleAction}
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
  removeFav: PropTypes.func
};

ProductList.defaultProps = {
  products: [],
  favorites: []
};

export default ProductList;
