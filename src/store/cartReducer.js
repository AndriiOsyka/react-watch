import { findAllByAltText } from "@testing-library/react"

const defaultState = {
    cart: [],
}

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state, cart: [...state.cart, action.payload]}
        case 'DELETE_PRODUCT':
            state.cart.splice(action.payload, 1);
            console.log(state.cart.length);
            return {...state, cart: state.cart}
        case 'DELETE_ALL':
            return {...state, cart: []}
        default:
            return state
    }
}