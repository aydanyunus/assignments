const getFromLocal = (key) => {
    const localData = JSON.parse(localStorage?.getItem(key));
    return localData || [];
}

const initialState = {
    cart: getFromLocal('cart'),
    total: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_products':
            return {
                cart: [...state.cart, action.payload]
            }
        case 'remove_products':
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }

        case 'set_total':
            return {
                ...state,
                total: action.payload
            }
        case 'clear_cart':
            localStorage.removeItem('cart')
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}