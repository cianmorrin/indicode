import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getQuestionnaire,
  submitQuestionnaire,
} from "../../actions/questionnaire";

export class Questionnaire extends Component {
  static propTypes = {
    questionnaire: PropTypes.array.isRequired,
    getQuestionnaire: PropTypes.func.isRequired,
    submitQuestionnaire: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    this.props.getQuestionnaire();
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.submitQuestionnaire(this.state);
  };

  render() {
    return (
      <Fragment>
        <h2>Questionnaire</h2>
        <form onSubmit={this.onSubmit}>
          {this.props.questionnaire.map((questionnaire) => (
            <div key={questionnaire.id}>
              <h4>{questionnaire.question}</h4>
              <input
                type="radio"
                value="option_A"
                name={questionnaire.id}
                onChange={this.onChange}
              />{" "}
              {questionnaire.option_A}
              <input
                type="radio"
                value="option_B"
                name={questionnaire.id}
                onChange={this.onChange}
              />{" "}
              {questionnaire.option_B}
            </div>
          ))}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  questionnaire: state.questionnaire.questionnaire,
});

export default connect(mapStateToProps, {
  getQuestionnaire,
  submitQuestionnaire,
})(Questionnaire);
