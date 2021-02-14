import { GET_LEARNING } from "../actions/types.js";

const initialState = {
  learning: [],
  learningStyleResults: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEARNING:
      return {
        ...state,
        learning: action.payload,
      };
    // case GET_LEARNING_STYLE_RESULTS:
    //   return {
    //     ...state,
    //     learningStyleResults: action.payload,
    //   };
    default:
      return state;
  }
}
