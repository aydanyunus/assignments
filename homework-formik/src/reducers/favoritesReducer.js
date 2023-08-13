const getFromLocal = (key) => {
    const localData = JSON.parse(localStorage?.getItem(key));
    return localData || [];
}

const initialState = {
    favorites: getFromLocal('favorites')
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_favorites':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'remove_favorites':
            return {
                ...state,
                favorites: state.favorites.filter((id) => id !== action.payload)
            }
     
        default:
            return state
    }
}