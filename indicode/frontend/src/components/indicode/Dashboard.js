import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LSOptions from "./LSOptions";
import LSResults from "./LSResults";
import { getLearningStyleResults } from "../../actions/questionnaire";
import { getUserQuizResults, isStreakOn } from "../../actions/learning";
import LSModal from "./LSModal";
import QuizResultsModal from "./QuizResultsModal";
import InterpreterModal from "./InterpreterModal";
import * as FaIcons from "react-icons/fa";
import Pencil from "../images/pencil.webp";
import Calendar from "../images/calendar.webp";
import Trophy from "../images/trophy.png";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    learningStyleResults: PropTypes.array.isRequired,
    quizResults: PropTypes.array.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
    sidebar: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
    this.props.getUserQuizResults();
  }

  componentDidUpdate() {
    let yesterDay = new Date(Date.now() - 1000 * 3600 * 24 * 1);
    let year = yesterDay.getFullYear();
    let month = yesterDay.getMonth() + 1;
    let date = yesterDay.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    const yesterdayStr = `${year}-${month}-${date}`;
    let quizResultDate = "";

    if (this.props.quizResults.length > 0) {
      for (let i = 0; i < this.props.quizResults.length; i++) {
        quizResultDate = this.props.quizResults[i]["date"];
      }
    }
    console.log("dashboard mount");

    console.log("quizResultDate", quizResultDate);
    console.log("yesterdayStr", yesterdayStr);

    if (yesterdayStr === quizResultDate) {
      this.props.isStreakOn(true);
      console.log("DASH STREAK IS ON ");
      let currentStreakScore = 0;
      for (let i = 0; i < this.props.quizResults.length; i++) {
        currentStreakScore = this.props.quizResults[i]["streak"];
      }
      console.log("currentStreakScore", currentStreakScore);
    } else {
      console.log("DASH STREAK IS NOTTTT ON ");
      this.props.isStreakOn(false);
    }
  }
  state = {
    isLSModalOpen: false,
    isIntModalOpen: false,
    isQRModalOpen: false,
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
  setQROpen = (qrModalState) => {
    this.setState(() => ({
      isQRModalOpen: qrModalState,
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

    let trophies = 0;
    if (this.props.quizResults.length > 0) {
      for (let i = 0; i < this.props.quizResults.length; i++) {
        if (this.props.quizResults[i]["trophy"] === true) {
          trophies++;
        }
      }
    }
    trophies = trophies.toString();

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
          <div className={this.props.sidebar ? "dashboard" : "dashboard lg"}>
            <div className="dash-left">
              <div className="card border-primary mb-3 main-card">
                <h2 className="card-header main-panel-header">
                  Welcome to IndiCode
                </h2>
                <p className="text-primary main-panel-text">
                  <span>
                    IndiCode is desgined with you in mind. We want to teach you
                    Python but in the way you want to be taught!
                  </span>{" "}
                  <span>
                    Fill out out the questionnaire to determine your learning
                    style and start the Python learning
                  </span>
                </p>
                <hr className="main-panel-hr"></hr>
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
              <div className="bottom-row">
                <div className="bottom-panels border border-primary">
                  <h4 className="card-title">Your Learning Style</h4>
                  <p className="card-text">Review and Updated Your Style</p>
                  <div style={BUTTON_WRAPPER_STYLES}>
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
                <div className="bottom-panels border border-primary">
                  <h4 className="card-title">Your stats</h4>
                  <p className="card-text">Check out your progress</p>
                  <div style={BUTTON_WRAPPER_STYLES}>
                    <button
                      className="btn btn-primary btn-med bottom-panel-btn"
                      onClick={() => this.setQROpen(true)}
                    >
                      View Quiz Results
                    </button>

                    <QuizResultsModal
                      open={this.state.isQRModalOpen}
                      onClose={() => this.setQROpen(false)}
                      quizResults={this.props.quizResults}
                    ></QuizResultsModal>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={this.props.sidebar ? "dash-right" : "dash-right lg"}
            >
              <div className="dashboard-side-panels border border-primary">
                <h3>Write some code!</h3>
                <img className="side-panels-img" src={Pencil} />
                <div style={BUTTON_WRAPPER_STYLES}>
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

              <div className="dashboard-side-panels border border-primary">
                <h3>IndiCoding Streak</h3>
                <img className="side-panels-img" src={Calendar} />
              </div>

              <div className="dashboard-side-panels border border-primary">
                <h3>Levels</h3>
                <img className="side-panels-img" src={Trophy} />
                {trophies}
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
  quizResults: state.learning.quizResults,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getLearningStyleResults,
  getUserQuizResults,
  isStreakOn,
})(Dashboard);
