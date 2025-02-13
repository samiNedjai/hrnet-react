import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";


export default  combineReducers({
    // reducers
    employee: employeeReducer,

});
