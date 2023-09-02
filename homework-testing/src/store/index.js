import { createStore } from "redux";
import { allReducers } from './reducers/index';
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)

export default store;