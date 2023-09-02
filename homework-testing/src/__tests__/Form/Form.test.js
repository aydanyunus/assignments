import Form from '../../components/Form/Form';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/index';
import renderer from 'react-test-renderer';




test('Form component snapshot', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <BrowserRouter>
                    <Form />
                </BrowserRouter>
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});