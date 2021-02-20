import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Questionnaire } from "./Questionnaire";

export class LSOptions extends Component {
  render() {
    return (
      <div>
        <div>
          Would you like to do a questionnaire or take the standard approach to
          learning?
        </div>
        <div className="card border-secondary mb-3 ls-options">
          <div className="card-header">Option 1</div>
          <div className="card-body">
            <h4 className="card-title">Questionnaire</h4>
            <p className="card-text">
              Fill out the Index of Learning Style Questionnaire in order to
              categories your learning style and have a fully immersed learning
              experience
            </p>
            <Link to={"./questionnaire"}>
              <span className="btn btn-primary btn-med">Go</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LSOptions;
