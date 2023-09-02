import Modal from '../../components/Modal/Modal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/index';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react'



test('Modal component snapshot', () => {
    const modalData = [
        {
            header: 'Do you want to add this product?',
            text: "Once you add this product, it will be shown in the shopping cart. Are you sure you want to add it?"
        }
    ];

    const tree = renderer
        .create(
            <Provider store={store}>
                <BrowserRouter>
                    <Modal modalData={modalData} />
                </BrowserRouter>
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});


test('modal renders', () => {
    render(
        <Modal />
    )
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()
})

test('modal closes when clicking overlay', () => {
    const onClose = jest.fn()
    render(
        <Modal onClose={onClose} />
    )
    const overlay = screen.getByTestId("modal-overlay");

    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1)
})


test('modal renders with modal data', () => {
    const modalDataMock = {
        header: 'Do you want to add this product?',
        text: "Once you add this product, it will be shown in the shopping cart. Are you sure you want to add it?"
      };
    
      render(
        <Modal modalData={modalDataMock} />
      );
    
      const modal = screen.getByTestId("modal");
      const header = screen.getByTestId("header");
      const text = screen.getByTestId("text");
    
      expect(modal).toBeInTheDocument();
      expect(header).toHaveTextContent(modalDataMock.header);
      expect(text).toHaveTextContent(modalDataMock.text);
})