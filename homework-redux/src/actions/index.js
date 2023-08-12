export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('../products.json')
            const data = await response.json();
            dispatch({
                type: 'fetch_products',
                payload: data
            })
        } catch (err) {
            console.log(err);
        }
    }
}



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

export const setModal = (isModalOpen, modalData) => {
    return dispatch => {
        dispatch({
            type: 'set_modal',
            payload: {isModalOpen, modalData}
        })
    }
}