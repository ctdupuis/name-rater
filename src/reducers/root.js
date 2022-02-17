import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from './alertReducer';
import loadReducer from "./loadReducer";

const rootReducer = combineReducers({
    userReducer,
    alertReducer,
    loadReducer
});

export default rootReducer;