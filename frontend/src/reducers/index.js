import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import learning from "./learning";
import questionnaire from "./questionnaire";
import style from "./style";
import sidebar from "./sidebar";
export default combineReducers({
  errors,
  messages,
  auth,
  learning,
  questionnaire,
  style,
  sidebar,
});
