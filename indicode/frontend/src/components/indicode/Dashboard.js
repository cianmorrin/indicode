import React, { Fragment } from "react";
import Learning from "./Learning";
import Questionnaire from "./Questionnaire";
import QuestionnaireRes from "./QuestionnaireRes";

export default function Dashboard() {
  return (
    <Fragment>
      <Questionnaire />
      <QuestionnaireRes />
    </Fragment>
  );
}
