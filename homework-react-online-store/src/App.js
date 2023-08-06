import React, { Component } from 'react'
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from './api';



class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      isModalOpen: false,
      cart: [],
      favorites: [],
      selectedProductId: null,
      total: 0
    }

  }
  handleOpenModal = (productId) => {
    this.setState((prevState) => ({ isModalOpen: prevState.isModalOpen = true, selectedProductId: prevState.selectedProductId = productId }));
  }

  handleCloseModal = () => {
    this.setState((prevState) => ({ isModalOpen: prevState.isModalOpen = false, selectedProductId: prevState.selectedProductId = null }));
  }

  componentDidUpdate() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    localStorage.setItem('products', JSON.stringify(this.state.products));
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
    localStorage.setItem('totalPrice', JSON.stringify(this.state.total));

  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ products: data }); 
    });
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.setState({ favorites: JSON.parse(favorites) });
    }
    const products = localStorage.getItem('products');
    if (products) {
      this.setState({ products: JSON.parse(products) });
    }
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.setState({ cart: JSON.parse(cart) });
    }
    const total = localStorage.getItem('totalPrice')
    if (total) {
      this.setState({ total: JSON.parse(total) })
    }
  }



  handleAddProduct = (selectedProduct) => {
    const productToAdd = this.state.products.find((product) => product.sku === selectedProduct.sku);

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd
    };

    const updatedCart = [...this.state.cart, newCartItem];


    this.setState({ cart: updatedCart }, () => {
      this.handlePrice();
      this.handleCloseModal();
    });
  }

  handlePrice = () => {
    const totalPrice = this.state.cart.reduce(
      (total, product) => total + product.price,
      0
    );
    this.setState({ total: totalPrice });
    localStorage.setItem('totalPrice', this.state.total)
  };

  handleFav = (productId) => {
    if (!this.state.favorites.includes(productId)) {
      this.setState(
        (prevState) => ({
          favorites: [...prevState.favorites, productId],
        })
      );
    }
  };

  removeFav = (productId) => {
    const updatedFav = this.state.favorites.filter((id) => id !== productId)
    this.setState({ favorites: updatedFav })
  }




  render() {
    const products = this.state.products.map((product) => ({
      ...product,
      key: product.sku
    }));

    return (
      <>
        <Header cart={this.state.cart} products={products} favorites={this.state.favorites} total={this.state.total} />
        <div className='container'>
          <ProductList products={products} onClick={this.handleOpenModal} handleFav={this.handleFav} removeFav={this.removeFav} favorites={this.state.favorites} />
        </div>
        {this.state.isModalOpen &&
          <Modal
            header='Do you want to add this product?'
            closeButton={true}
            text="Once you add this product, it will shown in shopping cart. Are you sure you want to add it?"
            actions={
              <>
                <button onClick={() => this.handleAddProduct(this.state.selectedProductId)}>
                  Ok
                </button>
                <button onClick={this.handleCloseModal}>
                  Cancel
                </button>
              </>
            }
            onClose={this.handleCloseModal}
          />
        }
      </>
    )
  }
}

export default App;