import { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../../store/actions/cartActions";
import { modalContent } from "../../utils/modalContent";
import { setModal } from "../../store/actions/modalActions";
import "./header.scss";

const Header = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dropdownContentRef = useRef(null)
  const cartRef = useRef(null);
  const dispatch = useDispatch();

  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.price,
      0
    );
    dispatch(setTotal(totalPrice));
  }, [cart, dispatch]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = (productId, modalId) => {
    const currentModal = modalContent.find((modal) => modal.id === modalId);
    if (currentModal) {
      dispatch(setModal(true, currentModal, productId));
    }
  };

  const handleOutsideClick = (e) => {
    if (
      dropdownContentRef.current &&
      !dropdownContentRef.current.contains(e.target) &&
      cartRef.current &&
      !cartRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="favorite-products">
            favorites ({favorites.length})
          </div>

          <button
            className="shopping-cart"
            onClick={handleDropdown}
            ref={cartRef}
          >
            <FaCartPlus />
            cart ({cart.length && cart.length})
          </button>
          {isDropdownOpen && (
            <div className="dropdown-cart" ref={dropdownContentRef}>
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

                            <h3 className="cart-item-title">{product.name}</h3>
                          </div>
                          <div className="cart-item--right">
                            <span className="cart-item-price">
                              {"$" + product.price}
                            </span>
                            <button
                              className="btn-delete"
                              onClick={() => {
                                openModal(product.id, "modal2");
                              }}
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart-details">
                  <h3 className="total-cost-title">Total delivery cost: </h3>
                  <span className="total-price"> {total + "$"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
  favorites: PropTypes.array,
  total: PropTypes.number,
  handleAction: PropTypes.func,
};

Header.defaultProps = {
  cart: [],
  favorites: [],
  total: 0,
};

export default Header;
