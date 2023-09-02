export const setModal = (isModalOpen, modalData, selectedProductId) => {
    return dispatch => {
        dispatch({
            type: 'set_modal',
            payload: {isModalOpen, modalData, selectedProductId}
        })
    }
}