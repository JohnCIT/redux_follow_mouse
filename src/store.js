// Import from Redux
import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// Import reducers
import sceneReducer from "./reducers/sceneReducer";


const reducers = combineReducers({
    sceneReducer: sceneReducer
});

let middleware = [thunk];
//any dev middleware, we will need logging in production but until then
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

// Add middleware. NOTE: Order of middleware matters, thunk before logger
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;