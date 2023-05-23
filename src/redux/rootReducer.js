import {combineReducers} from "redux";
import areaButtonReducer from "../components/AreaButton/areaButtonReducer";

export default combineReducers({
  countFR: areaButtonReducer,
});