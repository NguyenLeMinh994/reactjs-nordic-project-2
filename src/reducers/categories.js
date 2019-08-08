import { ActionType } from './../actions/actionType';

const initialState = {
    list:[],
    status:0,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:{
            const categories = action.payload;
            //Get category first  to add status
            const statusCategory = categories[0].id;
            return {
                list: categories,
                status: statusCategory
            }
        }
        default:
            return state;
    }
}

export default categoryReducer;
