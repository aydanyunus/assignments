const getFromLocal = (key) => {
    const localData = localStorage.getItem(key);

    try {
        const parsedData = JSON.parse(localData)
        return parsedData || [];
    }
    catch (e) {
        return []
    }

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