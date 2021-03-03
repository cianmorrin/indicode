import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Questionnaire } from "./Questionnaire";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LSModal from "./LSModal";

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
            We want you assess your learning style! However if you would prefer
            to dynamically assign it yourself or take the standard approach,
            that's perfectly ok!
          </p>
        </div>
        <div className="ls-option-panels mt-4">
          <div className="card border-secondary mb-3 ls-options">
            <div className="card-header ls-option-card-header">Option 1</div>
            <div className="card-body">
              <h4 className="card-title">Questionnaire</h4>
              <p className="card-text">
                Fill out the Index of Learning Style Questionnaire in order to
                categories your learning style and have a fully immersed
                learning experience
              </p>
              <Link to={"./questionnaire"}>
                <span className="btn btn-primary btn-med">Go</span>
              </Link>
            </div>
          </div>
          <div className="card border-secondary mb-3 ls-options">
            <div className="card-header ls-option-card-header">Option 2</div>
            <div className="card-body">
              <h4 className="card-title">Interactive Portal</h4>
              <p className="card-text">
                Fill out the Index of Learning Style Questionnaire in order to
                categories your learning style and have a fully immersed
                learning experience
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
                Fill out the Index of Learning Style Questionnaire in order to
                categories your learning style and have a fully immersed
                learning experience
              </p>
              <Link to={"./questionnaire"}>
                <span className="btn btn-primary btn-med">Go</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, {})(LSOptions);
