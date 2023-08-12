const initialState = {
    isModalOpen: false,
    modalData: ''
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set_modal': 
        return {
            ...state,
            isModalOpen: action.payload.isModalOpen,
            modalData: action.payload.modalData
        }
      
        default:
            return state
    }
}