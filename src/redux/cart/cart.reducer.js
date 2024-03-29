
import CartActionTypes from './cart.types';

import {addItemsToCart, deleteItemsFromCart, removeItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartActionTypes.HIDDEN_TOGGLE_CART:

            return {
                ...state,
                hidden: !state.hidden
            }

            case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }

            case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: deleteItemsFromCart(state.cartItems, action.payload)
            }

            case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;