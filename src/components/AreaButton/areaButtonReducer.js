import initialStore from "../../redux/initialStore";
import {INC} from "./areaButtonActions";

const areaButtonReducer = (count = initialStore.countFromRedux, action) => {
  switch (action.type) {
    case INC: {
      return count + 1;
    }

    default:
      return count;
  }
}

export default areaButtonReducer;