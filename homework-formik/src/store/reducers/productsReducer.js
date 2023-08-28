const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_products':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}