import { ActionType } from './actionType';

const addToCart=(product)=>{
    return {
        type: ActionType.ADD_TO_CART,
        payload: product,
    }
}

export default {
    addToCart,
}