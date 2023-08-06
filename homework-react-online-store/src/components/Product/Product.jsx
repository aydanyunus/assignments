import React, { Component } from "react";
import "./product.scss";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

class Product extends Component {
  render() {
    const { product, onClick, handleFav, favorites, removeFav } = this.props;
    const isFavorited = favorites.includes(product.sku);

    return (
      <div className="product-item">
        <img src={product.img_path} alt="" />
        <div className="product_header">
          <h2 className="product-title">{product.name}</h2>
          <span
            className="fav"
            onClick={() => {
              isFavorited ? removeFav(product.sku) : handleFav(product.sku);
            }}
          >
            {isFavorited ? (
              <FaStar style={{ color: "#ff6720" }} />
            ) : (
              <FaRegStar />
            )}
          </span>
        </div>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          porro.
        </p>
        <div className="product-details">
          <h4 className="product-price">{"$" + product.price}</h4>
          <button className="btn-add" onClick={() => onClick(product)}>
            add to card
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
};

Product.defaultProps = {
  product: {},
  favorites: [],
};

export default Product;
