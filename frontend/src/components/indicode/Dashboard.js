import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import { Link, Redirect } from "react-router-dom";
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
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AsIcons from "react-icons/ai";
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

    if (yesterdayStr === quizResultDate) {
      this.props.isStreakOn(true);
    } else {
      this.props.isStreakOn(false);
    }
  }
  state = {
    isLSModalOpen: false,
    isIntModalOpen: false,
    isQRModalOpen: false,
    goLearning: false,
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

  goToLearning = () => {
    this.setState(() => ({
      goLearning: true,
    }));
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    let currentStreakScore = 0;

    if (this.props.streak) {
      for (let i = 0; i < this.props.quizResults.length; i++) {
        currentStreakScore = this.props.quizResults[i]["streak"];
      }
    }
    currentStreakScore += 1;
    const BUTTON_WRAPPER_STYLES = {
      position: "relative",
      zIndex: 1,
      display: "inline",
      padding: "10px",
      border: "1px lightgray",
    };

    let quiz1trophy = false;
    let quiz2trophy = false;
    let trophies = "Trophies";
    this.props.quizResults.forEach(function (entry) {
      if (entry.quiz_no === 1) {
        if (entry.trophy === true) {
          quiz1trophy = true;
        }
      }
      if (entry.quiz_no === 2) {
        if (entry.trophy === true) {
          quiz2trophy = true;
        }
      }
    });

    if (quiz1trophy === false && quiz2trophy === false) {
      trophies = <div className="no-trophy">Nothing yet!</div>;
    } else {
      if (quiz1trophy && quiz2trophy) {
        trophies = (
          <div className="trophy-table-div">
            <table className="awards-table">
              <tbody>
                <tr>
                  <td className="award-icon">
                    <BsIcons.BsAward />
                  </td>
                  <td className="table-text">Data Types and Variables</td>
                </tr>
                <tr>
                  <td className="award-icon">
                    <BsIcons.BsAward />
                  </td>
                  <td className="table-text">Conditional and If Statements</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      } else if (quiz1trophy === true && quiz2trophy === false) {
        trophies = (
          <div className="trophy-table-div">
            <table className="awards-table">
              <tbody>
                <tr>
                  <td className="award-icon">
                    <BsIcons.BsAward />
                  </td>
                  <td className="table-text">Data Types and Variables</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      } else {
        trophies = (
          <div className="trophy-table-div">
            <table className="awards-table">
              <tbody>
                <tr>
                  <td className="award-icon">
                    <BsIcons.BsAward />
                  </td>
                  <td className="table-text">Conditional and If Statements</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    }

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
              <div className="card border-primary main-card">
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
                <div className="card-body main-cb">
                  <a
                    className="btn lg btn-secondary main-panel-btn"
                    href="#"
                    role="button"
                  >
                    Learn more on Indicode
                  </a>
                  <Link to="/learning">
                    <span className="main-panel-arrow" href="#" role="button">
                      {`Continue Learning Path `}{" "}
                      <AsIcons.AiOutlineRightCircle />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bottom-row">
                <div className="bottom-panels">
                  <div className="bottom-panel-title">
                    <div className="btm-panel-icon">
                      <FaIcons.FaChartPie />
                    </div>
                    <div className="btm-panel-text">Learning Style Portal</div>
                  </div>
                  {/* <p className="card-text">Review and Updated Your Style</p> */}
                  <div style={BUTTON_WRAPPER_STYLES}>
                    <button
                      id="openLSPortal"
                      className="btn lg btn-secondary bottom-panel-btn"
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
                <div className="bottom-panels">
                  <div className="bottom-panel-title stats">
                    <div className="btm-panel-icon chart">
                      <FaIcons.FaChartBar />
                    </div>
                    <div className="btm-panel-text quiz">
                      Quiz<br></br> Results
                    </div>
                  </div>
                  {/* <p className="card-text">Check out your progress</p> */}
                  <div style={BUTTON_WRAPPER_STYLES}>
                    <button
                      id="openQuizPortal"
                      className="btn lg btn-secondary bottom-panel-btn"
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
              <div className="dashboard-side-panels">
                <div className="side-panel-title">Write some code!</div>
                <img className="side-panels-img pencil" src={Pencil} />
                <div className="side-panel-div">
                  <button
                    id="openCodePortal"
                    className="btn lg btn-secondary side-panel-btn"
                    onClick={() => this.setIntOpen(true)}
                  >
                    Open Coding Portal
                  </button>
                  <InterpreterModal
                    open={this.state.isIntModalOpen}
                    onClose={() => this.setIntOpen(false)}
                  ></InterpreterModal>
                </div>
              </div>

              <div className="dashboard-side-panels">
                <div className="side-panel-title streak">IndiCoding Streak</div>
                <div className="side-panel-streak-content">
                  <img className="side-panels-img" src={Calendar} />
                  <div className="streak-panel-num">
                    {currentStreakScore}
                    <span className="streak-text">
                      {currentStreakScore > 1 ? `days` : `day`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="dashboard-side-panels">
                <div className="side-panel-title trophy">Awards Won</div>
                <div className="side-panel-streak-content">
                  <img className="side-panels-img t" src={Trophy} />
                  {trophies}
                </div>
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
  streak: state.learning.streak,
});

export default connect(mapStateToProps, {
  getLearningStyleResults,
  getUserQuizResults,
  isStreakOn,
})(Dashboard);
