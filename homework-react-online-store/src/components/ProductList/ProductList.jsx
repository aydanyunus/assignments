import React, { Component } from "react";
import "./product-list.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";

class ProductList extends Component {
  render() {
    const { products, onClick, handleFav, favorites } = this.props;

    return (
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <Product
              key={product.sku}
              product={product}
              onClick={onClick}
              handleFav={handleFav}
              favorites={favorites}
            />
          );
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites:  PropTypes.array
};

ProductList.defaultProps = {
  products: [],
  favorites: []
};

export default ProductList;
