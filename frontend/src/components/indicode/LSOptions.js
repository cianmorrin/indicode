import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Questionnaire } from "./Questionnaire";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LSModal from "./LSModal";
import { submitLearningStyle } from "../../actions/questionnaire";
import { getLearningStyleResults } from "../../actions/questionnaire";

export class LSOptions extends Component {
  static propTypes = {
    sidebar: PropTypes.bool.isRequired,
  };

  state = {
    isLSModalOpen: false,
  };

  setLSOpen = (lsModalState) => {
    this.setState(() => ({
      isLSModalOpen: lsModalState,
    }));
  };

  submitStandard = () => {
    const learningStyleSubmission = {
      af_a: 6,
      af_b: 5,
      si_a: 6,
      si_b: 5,
      vv_a: 6,
      vv_b: 5,
      sg_a: 6,
      sg_b: 5,
    };
    this.props.submitLearningStyle(learningStyleSubmission);
    window.location.reload();
  };

  render() {
    return (
      <div
        className={
          this.props.sidebar
            ? "container ls-options-main-lg"
            : "container ls-options-main"
        }
      >
        <div className="alert alert-dismissible alert-info mt-4">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <h4 className="alert-heading">Time to choose!</h4>
          <p className="mb-0">
            IndiCode is an E-Learning application which teaches Python. But
            that's not all, we want to assess your learning style to teach in a
            way that suits you. For the most accurate assessment we recommend
            option 1! However if you would prefer to dynamically assign it
            yourself (Option 2) or take the standard approach (Option 1), that's
            perfectly ok!
          </p>
        </div>
        <div className="ls-option-panels mt-4">
          <div className="card border-secondary mb-3 ls-options">
            <div className="card-header ls-option-card-header">Option 1</div>
            <div className="card-body">
              <h4 className="card-title">Questionnaire</h4>
              <p className="card-text">
                Fill out the Index of Learning Style Questionnaire in order to
                determine your style and have a personalised learning experience
                (Recommended)
              </p>
              <Link to={"./questionnaire"}>
                <span
                  id="doQuestionnaire"
                  className="btn btn-primary btn-med bottom-panel-btn"
                >
                  Do Questionnaire
                </span>
              </Link>
            </div>
          </div>
          <div className="card border-secondary mb-3 ls-options">
            <div className="card-header ls-option-card-header">Option 2</div>
            <div className="card-body">
              <h4 className="card-title">Interactive Portal</h4>
              <p className="card-text">
                Use our interactive Learning Style Portal and adjust your style
                as you see fit. Check out our explore page to understand the
                learning style domains!
              </p>
              <button
                className="btn btn-primary btn-med bottom-panel-btn"
                onClick={() => this.setLSOpen(true)}
              >
                Open LS Portal
              </button>

              <LSModal
                open={this.state.isLSModalOpen}
                onClose={() => this.setLSOpen(false)}
              ></LSModal>
            </div>
          </div>
          <div className="card border-secondary mb-3 ls-options">
            <div className="card-header ls-option-card-header">Option 3</div>
            <div className="card-body">
              <h4 className="card-title">Standard Approach</h4>
              <p className="card-text">
                This standard learning experience style touches on all learning
                domains. You can always update your style at any time with the
                interactive portal!
              </p>
              <span
                className="btn btn-primary btn-med bottom-panel-btn"
                onClick={this.submitStandard}
              >
                Use Standard
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar.sidebar,
  learningStyleResults: state.style.learningStyleResults,
});

export default connect(mapStateToProps, {
  submitLearningStyle,
  getLearningStyleResults,
})(LSOptions);
