import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { favoritesReducer } from "./favoritesReducer";
import { cartReducer } from "./cartReducer";
import { modalReducer } from "./modalReducer";



export const allReducers = combineReducers({
    products: productsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    modal: modalReducer
})
