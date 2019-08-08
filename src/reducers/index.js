import { combineReducers } from "redux";
import categoryReducer from './categories';
import productReducer from './products';

const rootReducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
});

export default rootReducers;