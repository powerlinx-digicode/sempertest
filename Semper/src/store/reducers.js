import { combineReducers } from "redux";

//Import Reducers
import { CustomerReducer } from "./customer/reducer";

export const rootReducers = combineReducers({
  customer: CustomerReducer,
});
