import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.HIDDEN_TOGGLE_CART
})


export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload:item
})