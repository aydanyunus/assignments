import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/actions/productActions';


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>


    </>
  )
}

export default App;