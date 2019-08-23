import { ActionType } from './actionType';

export const addToCart=(product,qty)=>{
    return {
        type: ActionType.ADD_TO_CART,
        payload: {
            product,
            qty
        }
    }
}

export const removeItemInCart = (product)=>{
    return{
        type:ActionType.REMOVE_ITEM_IN_CART,
        payload:{product,}
    }
}

export const updateCartItem = (product,qty) => {
    return {
        type: ActionType.UPDATE_CART_ITEM,
        payload: { product, qty },
    }
}