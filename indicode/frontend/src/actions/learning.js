import axios from "axios";
import { tokenConfig } from "./auth";
import { returnErrors, createMessage } from "./messages";

import { GET_LEARNING, GET_MCQUIZ, SUBMIT_QUIZ } from "./types";

// GET LEARNING MATERIAL
export const getLearning = () => (dispatch, getState) => {
  axios
    .get("/api/learning/content/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEARNING,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error retreiving learning content"));
};

// GET MCQUIZ MATERIAL
export const getMCQuiz = () => (dispatch, getState) => {
  axios
    .get("/api/learning/mcquiz/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MCQUIZ,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error retreiving quiz content"));
};

export const submitQuiz = (quizResults) => (dispatch, getState) => {
  const userQuizRes = {
    quiz_no: 1,
    score: quizResults,
  };

  axios
    .post("/api/user/quizresults/", userQuizRes, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitQuiz: "Quiz Posted" }));
      dispatch({
        type: SUBMIT_QUIZ,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
