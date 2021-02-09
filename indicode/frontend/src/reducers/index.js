import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import learning from "./learning";
import questionnaire from "./questionnaire";

export default combineReducers({
  errors,
  messages,
  auth,
  learning,
  questionnaire,
});
