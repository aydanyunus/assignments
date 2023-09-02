import { favoritesReducer } from '../../store/reducers/favoritesReducer';


describe('favoriteReducer', () => {
    it('should return default', () => {
        const initialState = {
            favorites: []
        }
        const action = { type: 'default' };
        expect(favoritesReducer(initialState, action)).toEqual(initialState);
    })

    it('should handle add_favorites action', () => {
        const initialState = {
            favorites: []
        }
        const action = {
            type: 'add_favorites', payload: {
                "name": "Dune",
                "price": 25,
                "img_path": "./imgs/dune.jpg",
                "sku": 82738273,
                "color": "#ffffff"
            }
        };
        const expectedState = {
            favorites: [{
                "name": "Dune",
                "price": 25,
                "img_path": "./imgs/dune.jpg",
                "sku": 82738273,
                "color": "#ffffff"
            }]
        };
        expect(favoritesReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle remove_favorites action', () => {
        const initialState = {
            favorites: [{
                "name": "Dune",
                "price": 25,
                "img_path": "./imgs/dune.jpg",
                "sku": 82738273,
                "color": "#ffffff"
            }]
        }
        const action = {
            type: 'remove_favorites', payload: 82738273
        };
        const expectedState = {
            favorites: [] 
        };
        expect(favoritesReducer(initialState, action)).toEqual(expectedState);
    });
})
