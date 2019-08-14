import { ActionType } from "./actionType";
import categoryApi from '../api/categoryApi';

export const getCategories = () => {
    return async (dispatch)=>{
        try {
            const categories = await categoryApi.getAll();
            // console.log(categories.body);
            
            dispatch({
                type: ActionType.GET_CATEGORIES,
                payload: categories.body,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductsFromCategory = (category) => {
    return async (dispatch) => {
        try {
            
            dispatch({
                type: ActionType.GET_PRODUCTS_FROM_CATEGORY,
                payload: category,
            });
        } catch (error) {
            console.log(error);
        }
    }
}