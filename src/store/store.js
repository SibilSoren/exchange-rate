import { createStore, combineReducers } from "redux";
import { rateReducer } from "./rateReducer";
import { userReducer } from "./userReducer";

export const store = new createStore(
  combineReducers({
    user: userReducer,
    rate: rateReducer,
  })
);
