import React, { Fragment } from "react";
import Learning from "./Learning";
import Questionnaire from "./Questionnaire";

export default function Dashboard() {
  return (
    <Fragment>
      <Learning />
      <Questionnaire />
    </Fragment>
  );
}
