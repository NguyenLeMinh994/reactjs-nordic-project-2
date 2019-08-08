import { ActionType } from "./actionType";
import categoryApi from './../api/category';

export const getCategories = () => {
    return async (dispatch)=>{
        try {
            const categories = await categoryApi.getAll();
            
            dispatch({
                type: ActionType.GET_CATEGORIES,
                payload: categories.body,
            })
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
}