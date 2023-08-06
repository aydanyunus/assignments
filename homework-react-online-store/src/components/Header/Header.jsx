import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import "./header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
      total: 0,
    };
  }

  handleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };
 


  render() {
    const { cart, favorites, total } = this.props;

    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="favorite-products">
              favorites ({favorites.length})
            </div>

            <button className="shopping-cart" onClick={this.handleDropdown}>
              <FaCartPlus />
              cart ({cart.length && cart.length})
            </button>
            {this.state.isDropdownOpen && (
              <div className="dropdown-cart">
                <div className="container">
                  <ul className="dropdown-list">
                    {cart.map((product) => {
                      return (
                        <li className="dropdown-item" key={product.id}>
                          <div className="cart-item">
                            <div className="cart-item--left">
                              <div className="cart-item-img">
                                <img src={product.img_path} alt="" />
                              </div>

                              <h3 className="cart-item-title">
                                {product.name}
                              </h3>
                            </div>
                            <div className="cart-item--right">
                              <span className="cart-item-price">
                                {"$" + product.price}
                              </span>
                              <button className="btn-delete">x</button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="cart-details">
                    <h3 className="total-cost-title">Total delivery cost: </h3>
                    <span className="total-price">
                      {total + "$"}
                    </span>
                  </div>
                  <div className="cart-buttons">
                    <button className="cart-btn view-btn">view cart</button>
                    <button className="cart-btn checkout-btn">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.array,
  products: PropTypes.array,
  favorites: PropTypes.array,
};

Header.defaultProps = {
  products: [],
  cart: [],
  favorites: [],
};

export default Header;
