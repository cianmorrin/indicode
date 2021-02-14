import { GET_LEARNING_STYLE_RESULTS } from "../actions/types.js";

const initialState = {
  learningStyleResults: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEARNING_STYLE_RESULTS:
      return {
        ...state,
        learningStyleResults: action.payload,
      };

    default:
      return state;
  }
}
