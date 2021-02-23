import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LSOptions from "./LSOptions";
import LSResults from "./LSResults";
import { getLearningStyleResults } from "../../actions/questionnaire";
import LSModal from "./LSModal";
import InterpreterModal from "./InterpreterModal";
import * as FaIcons from "react-icons/fa";
import Pencil from "../images/pencil.webp";
import Calendar from "../images/calendar.webp";
import Trophy from "../images/trophy.png";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    learningStyleResults: PropTypes.array.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
    sidebar: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
  }

  state = {
    isLSModalOpen: false,
    isIntModalOpen: false,
  };

  setLSOpen = (lsModalState) => {
    this.setState(() => ({
      isLSModalOpen: lsModalState,
    }));
  };

  setIntOpen = (intModalState) => {
    this.setState(() => ({
      isIntModalOpen: intModalState,
    }));
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const BUTTON_WRAPPER_STYLES = {
      position: "relative",
      zIndex: 1,
      display: "inline",
      padding: "10px",
    };

    const OTHER_CONTENT_STYLES = {
      position: "relative",
      zIndex: 2,
      backgroundColor: "red",
      padding: "10px",
    };

    const lesResults = this.props.learningStyleResults;
    let showResults;
    if (lesResults.length > 0) {
      showResults = true;
    } else {
      showResults = false;
    }

    let comp;
    if (showResults === false) {
      comp = <LSOptions />;
    } else if (showResults === true) {
      comp = (
        <Fragment>
          <div className="row mb-2">
            <div className="col-md-8">
              <div className="card border-primary mb-3 main-card">
                <h2 className="card-header main-panel-header">
                  Welcome to IndiCode
                </h2>
                <p className="card-body">
                  IndiCode is desgined with you in mind. We want to teach you
                  Python but in the way you want to be taught! Fill out out the
                  questionnaire to determine your learning style and start the
                  Python learning
                </p>
                <hr className="my-4"></hr>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-med main-card-btn"
                    href="#"
                    role="button"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5 bottom-panels border ">
                  <h4 className="card-title">Your Learning Style</h4>
                  <p className="card-text">Review and Updated Your Style</p>
                  <div
                    style={BUTTON_WRAPPER_STYLES}
                    onClick={() => console.log("clicked")}
                  >
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
                <div className="col-md-1"></div>
                <div className="col-md-5 bottom-panels border">
                  <h4 className="card-title">Your stats</h4>
                  <p className="card-text">Check out your progress</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 dashbaord-right-side">
              <strong>{user ? `Welcome ${user.username}` : ""}</strong>
              <div
                className={
                  this.props.sidebar
                    ? "dashboard-side-panels border border-primary"
                    : "dashboard-side-panels-lg border border-primary"
                }
              >
                <h3>Write some code!</h3>
                <img className="side-panels-img" src={Pencil} />
                <div
                  style={BUTTON_WRAPPER_STYLES}
                  onClick={() => console.log("clicked")}
                >
                  <button
                    className="btn btn-primary btn-med panel-btn"
                    onClick={() => this.setIntOpen(true)}
                  >
                    Open Code Portal
                  </button>

                  <InterpreterModal
                    open={this.state.isIntModalOpen}
                    onClose={() => this.setIntOpen(false)}
                  ></InterpreterModal>
                </div>
              </div>

              <div
                className={
                  this.props.sidebar
                    ? "dashboard-side-panels border border-primary"
                    : "dashboard-side-panels-lg border border-primary"
                }
              >
                <h3>10 Day Challenge</h3>
                <img className="side-panels-img" src={Calendar} />
              </div>

              <div
                className={
                  this.props.sidebar
                    ? "dashboard-side-panels border border-primary"
                    : "dashboard-side-panels-lg border border-primary"
                }
              >
                <h3>Levels</h3>
                <img className="side-panels-img" src={Trophy} />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }

    return <Fragment>{comp}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  learningStyleResults: state.style.learningStyleResults,
  sidebar: state.sidebar.sidebar,
  auth: state.auth,
});

export default connect(mapStateToProps, { getLearningStyleResults })(Dashboard);
