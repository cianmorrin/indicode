import axios from "axios";
import { tokenConfig } from "./auth";

import { GET_QUESTIONNAIRE } from "./types";

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
