import axios from "axios";
import { arrayOf } from "prop-types";
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
  console.log("GETTING CALLED");

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

  let act_or_ref, sen_or_int, vis_or_verb, seq_or_glob;

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

  if (af_a > af_b) {
    const temp1 = af_a - af_b;
    act_or_ref = "act" + temp1.toString();
  } else if (af_b > af_a) {
    const temp2 = af_b - af_a;
    act_or_ref = "ref" + temp2.toString();
  }

  if (si_a > si_b) {
    const temp1 = si_a - si_b;
    sen_or_int = "sen" + temp1.toString();
  } else if (si_b > si_a) {
    const temp2 = si_b - si_a;
    sen_or_int = "int" + temp2.toString();
  }

  if (vv_a > vv_b) {
    const temp1 = vv_a - vv_b;
    vis_or_verb = "vis" + temp1.toString();
  } else if (vv_b > vv_a) {
    const temp2 = vv_b - vv_a;
    vis_or_verb = "verb" + temp2.toString();
  }

  if (sg_a > sg_b) {
    const temp1 = sg_a - sg_b;
    seq_or_glob = "seq" + temp1.toString();
  } else if (sg_b > sg_a) {
    const temp2 = sg_b - sg_a;
    seq_or_glob = "glo" + temp2.toString();
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
    act_or_ref: act_or_ref,
    sen_or_int: sen_or_int,
    vis_or_verb: vis_or_verb,
    seq_or_glob: seq_or_glob,
  };
  axios
    .post(
      "/api/user/learningstyle/",
      questionnaireSubmission,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log("questionnaire submitted");
      dispatch(
        createMessage({ submitQuestionnaire: "Questionnaire Submitted" })
      );
      dispatch({
        type: SUBMIIT_QUESTIONNAIRE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("questionnaire failing");
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// SUBMIT LEARNING STYLE
export const submitLearningStyle = (learningStyleScore) => (
  dispatch,
  getState
) => {
  let act_or_ref, sen_or_int, vis_or_verb, seq_or_glob;

  console.log("action learningStyleScore", learningStyleScore);

  const { af_a, af_b, si_a, si_b, vv_a, vv_b, sg_a, sg_b } = learningStyleScore;

  console.log("af_a, af_b", af_a, af_b);

  if (af_a > af_b) {
    act_or_ref = "act" + af_a.toString();
  } else if (af_b > af_a) {
    act_or_ref = "ref" + af_b.toString();
  }

  if (si_a > si_b) {
    sen_or_int = "sen" + si_a.toString();
  } else if (si_b > si_a) {
    sen_or_int = "int" + si_b.toString();
  }

  if (vv_a > vv_b) {
    vis_or_verb = "vis" + vv_a.toString();
  } else if (vv_b > vv_a) {
    vis_or_verb = "verb" + vv_b.toString();
  }

  if (sg_a > sg_b) {
    seq_or_glob = "seq" + sg_a.toString();
  } else if (sg_b > sg_a) {
    seq_or_glob = "glo" + sg_b.toString();
  }

  const questionnaireSubmission = {
    completed_questionnaire: true,
    active_score: af_a,
    reflective_score: af_b,
    sensing_score: si_a,
    intuitive_score: si_b,
    visual_score: vv_a,
    verbal_score: vv_b,
    sequential_score: sg_a,
    global_score: sg_b,
    act_or_ref: act_or_ref,
    sen_or_int: sen_or_int,
    vis_or_verb: vis_or_verb,
    seq_or_glob: seq_or_glob,
  };
  axios
    .post(
      "/api/user/learningstyle/",
      questionnaireSubmission,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: SUBMIIT_QUESTIONNAIRE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
