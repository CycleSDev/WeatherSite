import { combineReducers, createStore } from "redux";
import { citiesReducer } from "./citiesReducer";

const rootReducer = combineReducers({
    citiesReducer,
})

export const store = createStore(rootReducer);