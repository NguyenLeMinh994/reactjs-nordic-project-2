import { combineReducers } from "redux";
import cartReducer from './cartReducer.js';

const rootReducers = combineReducers({
    cart: cartReducer,
});

export default rootReducers;