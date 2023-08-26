export const addFavorites = (productId) => {
    return dispatch => {
        dispatch({
            type: 'add_favorites',
            payload: productId
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