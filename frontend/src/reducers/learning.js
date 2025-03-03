import {
  GET_LEARNING,
  GET_MCQUIZ,
  SUBMIT_QUIZ,
  GET_QUIZ_RESULTS,
  STREAK,
  WHAT_QUIZ,
} from "../actions/types.js";

const initialState = {
  learning: [],
  mcquiz: [],
  quizResults: [],
  streak: false,
  lessonNum: 0,
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
    case SUBMIT_QUIZ:
      return {
        ...state,
        mcquiz: [...state.mcquiz, action.payload],
      };
    case GET_QUIZ_RESULTS:
      return {
        ...state,
        quizResults: action.payload,
      };
    case STREAK:
      return {
        ...state,
        streak: action.payload,
      };
    case WHAT_QUIZ:
      return {
        ...state,
        lessonNum: action.payload,
      };

    default:
      return state;
  }
}
