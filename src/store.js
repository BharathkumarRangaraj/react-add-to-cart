import { createStore } from "redux";
import rootReducer from "./combineReducer";

const Store=createStore(rootReducer);
export default Store;