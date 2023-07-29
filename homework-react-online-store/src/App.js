import React, { Component } from 'react'
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      isModalOpen: false,
      cart: [],
      favorites: [],
      selectedProductId: null
    }

  }
  handleOpenModal = (productId) => {
    this.setState((prevState) => ({ isModalOpen: prevState.isModalOpen = true, selectedProductId: prevState.selectedProductId = productId }));
  }
  handleCloseModal = () => {
    this.setState((prevState) => ({ isModalOpen: prevState.isModalOpen = false, selectedProductId: prevState.selectedProductId = null }));
  }

  componentDidMount() {
    this.fetchData()
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
  }

  componentDidUpdate() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    localStorage.setItem('products', JSON.stringify(this.state.products));
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  handleAddProduct = (productId) => {
    const updatedCart = [...this.state.cart, productId] 
    this.setState({cart: updatedCart})
    this.handleCloseModal()
  }

  handleFav = (productId) => {
    if (!this.state.favorites.includes(productId)) {
      this.setState(
        (prevState) => ({
          favorites: [...prevState.favorites, productId],
        }),
        () => {
          localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        }
      );
    }
  };

  fetchData = async () => {
    try {
      const response = await fetch('./products.json')
      const data = await response.json()
      console.log(data)

      this.setState({
        products: data
      }, ()=> {
        localStorage.setItem('products', JSON.stringify(data));
      })

    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const products = this.state.products.map((product) => ({
      ...product,
      key: product.sku
    }));

    return (
      <>
        <Header cart={this.state.cart} products={products} favorites={this.state.favorites}/>
        <div className='container'>
          <ProductList products={products} onClick={this.handleOpenModal} handleFav={this.handleFav} favorites={this.state.favorites}/>
        </div>
        {this.state.isModalOpen &&
          <Modal
            header='Do you want to add this product?'
            closeButton={true}
            text="Once you add this product, it will shown in shopping cart. Are you sure you want to add it?"
            actions={
              <>
                <button onClick={() => this.handleAddProduct(this.state.selectedProductId)}>
                  Add
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