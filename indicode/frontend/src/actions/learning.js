import axios from "axios";
import { tokenConfig } from "./auth";

import { GET_LEARNING, GET_LEARNING_STYLE_RESULTS } from "./types";

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

// GET LEARNING STYLE QUESTIONNAIRE RESULTS
export const getLearningStyleResults = () => (dispatch, getState) => {
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
