export const addFavorites = (product) => {
    return dispatch => {
        dispatch({
            type: 'add_favorites',
            payload: product
        })
    }
}


export const removeFavorites = (productId) => {
    return dispatch => {
        dispatch({
            type: 'remove_favorites',
            payload: productId
        })
    }
}