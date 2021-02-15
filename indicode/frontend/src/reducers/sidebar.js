import { SIDE_BAR } from "../actions/types.js";

const initialState = {
  sidebar: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIDE_BAR:
      console.log("sidebar reducer");
      return {
        sidebar: !state.sidebar,
      };
    default:
      return state;
  }
}
