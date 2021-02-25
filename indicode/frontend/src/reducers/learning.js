import { GET_LEARNING, GET_MCQUIZ } from "../actions/types.js";

const initialState = {
  learning: [],
  mcquiz: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEARNING:
      return {
        ...state,
        learning: action.payload,
      };
    case GET_MCQUIZ:
      return {
        ...state,
        mcquiz: action.payload,
      };
    default:
      return state;
  }
}
