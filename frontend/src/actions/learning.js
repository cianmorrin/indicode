import axios from "axios";
import { tokenConfig } from "./auth";
import { returnErrors, createMessage } from "./messages";

import {
  GET_LEARNING,
  GET_MCQUIZ,
  SUBMIT_QUIZ,
  GET_QUIZ_RESULTS,
  STREAK,
  WHAT_QUIZ,
} from "./types";

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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const submitQuiz = (quizResults, lessonNum, streakScore) => (
  dispatch,
  getState
) => {
  let trophy = false;
  if (quizResults > 3) {
    trophy = true;
  }
  let quizNum = 1;
  lessonNum === 3 ? (quizNum = 2) : (quizNum = 1);
  const userQuizRes = {
    quiz_no: quizNum,
    score: quizResults,
    trophy: trophy,
    streak: streakScore,
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

export const getUserQuizResults = () => (dispatch, getState) => {
  axios
    .get("/api/user/quizresults", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_QUIZ_RESULTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const isStreakOn = (streakOn) => (dispatch, getState) => {
  dispatch({
    type: STREAK,
    payload: streakOn,
  });
};

export const whatQuiz = (lessonNum) => (dispatch, getState) => {
  dispatch({
    type: WHAT_QUIZ,
    payload: lessonNum,
  });
};
