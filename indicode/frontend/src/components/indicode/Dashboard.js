import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Questionnaire from "./Questionnaire";
import PropTypes from "prop-types";
import { getLearningStyleResults } from "../../actions/learning";

export class Dashboard extends Component {
  static propTypes = {
    learningStyleResults: PropTypes.array.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log("dashbpard mounting");
    this.props.getLearningStyleResults();
  }

  render() {
    return (
      <div>
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
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((learningStyleResults, index) => (
              <tr key={index}>
                <td>{learningStyleResults.user_ls}</td>
                <td>{learningStyleResults.active_score}</td>
                <td>{learningStyleResults.reflective_score}</td>
                <td>{learningStyleResults.sensing_score}</td>
                <td>{learningStyleResults.intuitive_score}</td>
                <td>{learningStyleResults.visual_score}</td>
                <td>{learningStyleResults.verbal_score}</td>
                <td>{learningStyleResults.active_score}</td>
                <td>{learningStyleResults.sequential_score}</td>
                <td>{learningStyleResults.global_score}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  learningStyleResults: state.learningStyleResults.learningStyleResults,
});

export default connect(mapStateToProps, { getLearningStyleResults })(Dashboard);
// export default Dashboard;
