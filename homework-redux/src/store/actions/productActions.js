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
