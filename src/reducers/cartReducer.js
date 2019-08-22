import { ActionType } from '../actions/actionType';

let data = JSON.parse(localStorage.getItem('CART'));
const initialState = data ? data : [];

const productReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            const {
                product,
                qty
            } = action.payload;

            const index = findProductInCart(state, product);

            if (index !== -1) {
                state[index].qty += qty;
            } else {
                const newProduct = {
                    product,
                    qty
                };
                state.push(
                    newProduct
                );
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        }

        case ActionType.REMOVE_ITEM_IN_CART: {
            const {
                product
            } = action.payload;
            const index = findProductInCart(state, product)
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }

        default:
            return [...state];

    }

};

const findProductInCart=(carts,product)=>{
    let index = -1;
    if(carts.length > 0){

        index = carts.findIndex(cart => cart.product.id === product.id);
        
    }
    return index;
};
export default productReducer;