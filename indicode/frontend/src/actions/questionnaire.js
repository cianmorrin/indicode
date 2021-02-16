import axios from "axios";
import { tokenConfig } from "./auth";
import { returnErrors, createMessage } from "./messages";
import {
  GET_LEARNING_STYLE_RESULTS,
  GET_QUESTIONNAIRE,
  SUBMIIT_QUESTIONNAIRE,
} from "./types";

// GET QUESTIONNAIRE MATERIAL
export const getQuestionnaire = () => (dispatch, getState) => {
  axios
    .get("/api/learning/questionnaire/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_QUESTIONNAIRE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error retreiving questionnaire content"));
};

// GET LS RESULTS
export const getLearningStyleResults = () => (dispatch, getState) => {
  axios
    .get("/api/user/learningstyle", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEARNING_STYLE_RESULTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// SUBMIT QUESTIONNAIRE
export const submitQuestionnaire = (questionnaireResults) => (
  dispatch,
  getState
) => {
  let results = [];
  for (const [key, value] of Object.entries(questionnaireResults)) {
    results.push(value);
  }
  let af_a = 0,
    af_b = 0,
    si_a = 0,
    si_b = 0,
    vv_a = 0,
    vv_b = 0,
    sg_a = 0,
    sg_b = 0,
    counter = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 4; j++) {
      switch (j) {
        case 0:
          if (results[counter] === "option_A") {
            af_a += 1;
          } else if (results[counter] === "option_B") {
            af_b += 1;
          }
          break;
        case 1:
          if (results[counter] === "option_A") {
            si_a += 1;
          } else if (results[counter] === "option_B") {
            si_b += 1;
          }
          break;
        case 2:
          if (results[counter] === "option_A") {
            vv_a += 1;
          } else if (results[counter] === "option_B") {
            vv_b += 1;
          }
          break;
        case 3:
          if (results[counter] === "option_A") {
            sg_a += 1;
          } else if (results[counter] === "option_B") {
            sg_b += 1;
          }
          break;
        default:
          return 0;
      }
      counter += 1;
    }
  }
  let completedQuestionnaire = false;
  if (counter >= 43) {
    completedQuestionnaire = true;
  }
  const questionnaireSubmission = {
    completed_questionnaire: completedQuestionnaire,
    active_score: af_a,
    reflective_score: af_b,
    sensing_score: si_a,
    intuitive_score: si_b,
    visual_score: vv_a,
    verbal_score: vv_b,
    sequential_score: sg_a,
    global_score: sg_b,
  };
  axios
    .post(
      "/api/user/learningstyle/",
      questionnaireSubmission,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(
        createMessage({ submitQuestionnaire: "Questionnaire Submitted" })
      );
      dispatch({
        type: SUBMIIT_QUESTIONNAIRE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
