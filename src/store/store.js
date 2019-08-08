import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk';

import rootReducers from "../reducers/index.js";

const middleware = applyMiddleware(thunkMiddleWare);
const store = createStore(rootReducers, {}, middleware);

export default store;