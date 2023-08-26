const initialState = {
    isModalOpen: false,
    modalData: '',
    selectedProductId: null
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set_modal':
            return {
                ...state,
                isModalOpen: action.payload.isModalOpen,
                modalData: action.payload.modalData,
                selectedProductId: action.payload.selectedProductId
            }
        default:
            return state
    }
}