import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getQuestionnaire } from "../../actions/questionnaire";

export class Questionnaire extends Component {
  static propTypes = {
    questionnaire: PropTypes.array.isRequired,
    getQuestionnaire: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getQuestionnaire();
  }

  render() {
    return (
      <Fragment>
        <h2>Questionnaire</h2>
        {this.props.questionnaire.map((questionnaire) => (
          <div key={questionnaire.id}>
            <div>{questionnaire.question}</div>
            <div>{questionnaire.option_A}</div>
            <div>{questionnaire.option_B}</div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  questionnaire: state.questionnaire.questionnaire,
});

export default connect(mapStateToProps, { getQuestionnaire })(Questionnaire);
