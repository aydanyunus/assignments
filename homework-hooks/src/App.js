import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from './api';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Home from './pages/Home';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [selectedProductId, setSelectProductId] = useState(null);
  const [total, setTotal] = useState(0);
  const [actionType, setActionType] = useState('')


  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }

    const products = localStorage.getItem('products');
    if (products) {
      setProducts(JSON.parse(products));
    }

    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
    }

    const total = localStorage.getItem('totalPrice');
    if (total) {
      setTotal(JSON.parse(total));
    }

  }, []);


  useEffect(() => {
    fetchData().then(data => {
      setProducts(data)
      localStorage.setItem('products', JSON.stringify(data));
    })
  }, []);



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
      setModalData(currentModal);
      if (modalId === "modal1") {
        setActionType("add");
      } else if (modalId === "modal2") {
        setActionType("remove");
      }
    }
    setIsModalOpen(true)
    setSelectProductId(productId)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectProductId(null)
  }



  const handleAddProduct = (selectedProduct) => {
    const productToAdd = products.find((product) => product.sku === selectedProduct.sku);

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd
    };

    const updatedCart = [...cart, newCartItem];

    setCart(updatedCart);
    handleCloseModal();
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const handleFav = (productId) => {
    if (!favorites.includes(productId)) {
      const newFavs = [...favorites, productId];
      setFavorites(newFavs);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
    }
  };


  const removeFav = (productId) => {
    const updatedFav = favorites.filter((id) => id !== productId)
    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));

  }

  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    setTotal(totalPrice);
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  const removeProduct = (id) => {
    const updatedProduct = cart.filter((product) => product.id !== id)
    setCart(updatedProduct);
    localStorage.setItem("cart", JSON.stringify(updatedProduct));
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
        <Route path='/cart' element={<Cart products={cart} onClick={handleOpenModal} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
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