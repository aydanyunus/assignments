import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  addFavorites,
  removeFavorites,
  addProducts,
  removeProducts,
  setTotal,
  setModal
} from './actions/index';

const App = () => {

  const products = useSelector(state => state.products.products);
  const favorites = useSelector(state => state.favorites.favorites)
  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.cart.total);
  const { modalData, isModalOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch();


  const [selectedProductId, setSelectProductId] = useState(null);
  const [actionType, setActionType] = useState('')


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);



  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])



  const handleAction = (productId, action) => {
    setActionType(action);
    if (action === "add") {
      handleOpenModal(productId, "modal1");
    } else if (action === "remove") {
      handleOpenModal(productId, "modal2");
    }
  };

  const handleOpenModal = (productId, modalId) => {
    const currentModal = modalContent.find((modal) => modal.id === modalId);
    if (currentModal) {
      if (modalId === "modal1") {
        setActionType("add");
      } else if (modalId === "modal2") {
        setActionType("remove");
      }
    }
    dispatch(setModal(true, currentModal));
    setSelectProductId(productId)
  }

  const handleCloseModal = () => {
    dispatch(setModal(false, null));
    setSelectProductId(null)
  }



  const handleAddProduct = (selectedProduct) => {

    const productToAdd = products.find((product) => product.sku === selectedProduct.sku);

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd
    };

    dispatch(addProducts(newCartItem))
    handleCloseModal();
  };


  const handleFav = (productId) => {
    if (!favorites.includes(productId)) {
      dispatch(addFavorites(productId))


    }
  };


  const removeFav = (productId) => {
    dispatch(removeFavorites(productId))
  }

  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    dispatch(setTotal(totalPrice))
  }, [cart, dispatch]);


  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);


  const removeProduct = (id) => {
    dispatch(removeProducts(id))

    handleCloseModal()
  }

  const modalContent = [
    {
      id: 'modal1',
      header: 'Do you want to add this product?',
      closeButton: true,
      text: "Once you add this product, it will be shown in the shopping cart. Are you sure you want to add it?",
    },
    {
      id: 'modal2',
      header: 'Do you want to remove this product?',
      closeButton: true,
      text: "Once you remove this product, it won't be possible to undo this action. Are you sure you want to remove it?",
    },
  ];


  return (

    <>
      <Header cart={cart} products={products} favorites={favorites} total={total} handleAction={handleAction} />

      <Routes>
        <Route path='/' element={<Home products={products} onClick={handleOpenModal} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
        <Route path='/cart' element={<Cart products={cart} onClick={handleOpenModal} handleAction={handleAction} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
        <Route path='/favorites' element={<Favorites products={products} onClick={handleOpenModal} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
      </Routes>

      {isModalOpen &&
        <Modal
          modalData={modalData}
          closeButton={true}
          actions={
            <>
              {actionType === "add" ? (
                <button onClick={() => handleAddProduct(selectedProductId)}>
                  Ok
                </button>
              ) : actionType === "remove" ? (
                <button onClick={() => removeProduct(selectedProductId)}>
                  Ok
                </button>
              ) : null}
              <button onClick={handleCloseModal}>Cancel</button>
            </>
          }
          onClose={handleCloseModal}
        />
      }
    </>
  )
}

export default App;