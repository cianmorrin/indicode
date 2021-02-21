import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLearningStyleResults } from "../../actions/questionnaire";

export class LSResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h2>Learning Style Results</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User_ID</th>
              <th>Active </th>
              <th>Reflective </th>
              <th>Sensing </th>
              <th>intuitive</th>
              <th>Visual</th>
              <th>Verbal</th>
              <th>Sequential</th>
              <th>Global</th>
              <th>Completed</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.learningStyleResults.map(
              (learningStyleResult, index) => (
                <tr key={index}>
                  <td>{learningStyleResult.user_ls}</td>
                  <td>{learningStyleResult.active_score}</td>
                  <td>{learningStyleResult.reflective_score}</td>
                  <td>{learningStyleResult.sensing_score}</td>
                  <td>{learningStyleResult.intuitive_score}</td>
                  <td>{learningStyleResult.visual_score}</td>
                  <td>{learningStyleResult.verbal_score}</td>
                  <td>{learningStyleResult.sequential_score}</td>
                  <td>{learningStyleResult.global_score}</td>
                  <td>{learningStyleResult.completed_questionnaire}</td>
                  <td></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default LSResults;
