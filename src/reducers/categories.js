import { ActionType } from './../actions/actionType';

const initialState = {
    list:[],
    status:'0',
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:{
            const categories = action.payload;
            //Get category first  to add status
            
            return {
                list: categories,
                status:'0'
            }
        }
        case ActionType.GET_PRODUCTS_FROM_CATEGORY:{
            console.log(action.payload);
            const category = action.payload;
            return {
                ...state,
                status: category.id,
            }
        }
        default:
            return state;
    }
}

export default categoryReducer;
