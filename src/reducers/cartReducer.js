import { ActionType } from '../actions/actionType';

const initialState={
    list:[],
    totalQuantity:0,
}

const productReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return state;
        default:
            return state;

    }

}

export default productReducer;