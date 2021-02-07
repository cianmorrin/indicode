import axios from "axios";
import { tokenConfig } from "./auth";

import { GET_LEARNING } from "./types";

// GET LEARNING MATERIAL
export const getLearning = () => (dispatch, getState) => {
  axios
    .get("/api/learning/", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_LEARNING,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error retreiving learning content"));
};
