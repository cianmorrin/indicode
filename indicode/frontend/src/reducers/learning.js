import { GET_LEARNING } from "../actions/types.js";

const initialState = {
  learning: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEARNING:
      return {
        ...state,
        learning: action.payload,
      };
    default:
      return state;
  }
}
