export const addProducts = (product) => {
    return dispatch => {
        dispatch({
            type: 'add_products',
            payload: product
        })
    }
}


export const removeProducts = (productId) => {
    return dispatch => {
        dispatch({
            type: 'remove_products',
            payload: productId
        })
    }
}


export const setTotal = (total) => {
    return dispatch => {
        dispatch({
            type: 'set_total',
            payload: total
        })
    }
}