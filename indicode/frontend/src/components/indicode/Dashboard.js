import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LSOptions from "./LSOptions";
import LSResults from "./LSResults";
import { getLearningStyleResults } from "../../actions/questionnaire";
import Modal from "./Modal";

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
    isOpen: false,
  };

  setIsOpen = (modalState) => {
    this.setState(() => ({
      isOpen: modalState,
    }));
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const BUTTON_WRAPPER_STYLES = {
      position: "relative",
      zIndex: 1,
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
                <p className="card-body">
                  Once your style is determined we can begin the process
                </p>
                <p className="card-body">
                  <a className="btn btn-primary btn-med" href="#" role="button">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="row mb-2">
                <div className="col-md-5 bottom-panels border ">
                  <h4 className="card-title">Continue Learning</h4>
                  <p className="card-text">Python 3</p>
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
                <h1>Row 1</h1>
              </div>

              <div
                className={
                  this.props.sidebar
                    ? "dashboard-side-panels border border-primary"
                    : "dashboard-side-panels-lg border border-primary"
                }
              >
                <h1>Row 2</h1>
                <div
                  style={BUTTON_WRAPPER_STYLES}
                  onClick={() => console.log("clicked")}
                >
                  <button onClick={() => this.setIsOpen(true)}>
                    Open Modal
                  </button>

                  <Modal
                    open={this.state.isOpen}
                    onClose={() => this.setIsOpen(false)}
                  >
                    Fancy Modal
                  </Modal>
                </div>

                <div style={OTHER_CONTENT_STYLES}>Other Content</div>
              </div>

              <div
                className={
                  this.props.sidebar
                    ? "dashboard-side-panels border border-primary"
                    : "dashboard-side-panels-lg border border-primary"
                }
              >
                <h1>Row 3</h1>
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
