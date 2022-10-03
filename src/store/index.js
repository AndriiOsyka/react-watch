import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers( {
    customers: customerReducer,
    cash: cashReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))