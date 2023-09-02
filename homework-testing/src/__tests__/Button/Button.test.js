import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Form from '../../components/Form/Form';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/index';
import Product from '../../components/Product/Product';

afterEach(cleanup)



describe('buttons', () => {

  test('form button with content should be rendered', () => {
    render(<Provider store={store}>
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </Provider>)

    expect(screen.getByRole('button')).toHaveTextContent('Checkout')
  })




  test('Product add to cart button should be rendered', () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>)

    const btnAdd = screen.getByTestId('btn-add-to-cart')
    expect(btnAdd).toBeInTheDocument();
  })


  test('Product remove from cart button should be rendered', () => {
    const product = {
      "name": "Dune",
      "price": 25,
      "img_path": "./imgs/dune.jpg",
      "sku": 82738273,
      "color": "#ffffff"
    }
    render(
      <Provider store={store}>
        <Product product={product} isInCart={true}/>
      </Provider>)

    const btnRemove = screen.getByTestId('btn-remove-from-cart')

    expect(btnRemove).toBeInTheDocument();

  })
});




