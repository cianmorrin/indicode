import { GET_QUESTIONNAIRE, SUBMIIT_QUESTIONNAIRE } from "../actions/types.js";

const initialState = {
  questionnaire: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: action.payload,
      };
    case SUBMIIT_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: [...state.questionnaire, action.payload],
      };
    default:
      return state;
  }
}
