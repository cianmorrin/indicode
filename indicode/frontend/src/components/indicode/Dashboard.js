import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Questionnaire from "./Questionnaire";
import LSResults from "./LSResults";
import { getLearningStyleResults } from "../../actions/questionnaire";

export class Dashboard extends Component {
  static propTypes = {
    learningStyleResults: PropTypes.array.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
    sidebar: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
  }

  render() {
    const lesResults = this.props.learningStyleResults;
    let showResults;
    if (lesResults.length > 0) {
      showResults = true;
    } else {
      showResults = false;
    }

    let comp;
    if (showResults === false) {
      comp = <Questionnaire />;
    } else if (showResults === true) {
      comp = (
        <LSResults learningStyleResults={this.props.learningStyleResults} />
      );
    }
    return (
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
            <div className="dashboard-side-panels border border-primary">
              <h1>Row 1</h1>
            </div>
            <div className="dashboard-side-panels border border-primary">
              <h1>Row 2</h1>
            </div>
            <div className=" dashboard-side-panels border border-primary">
              <h1>Row 3</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  learningStyleResults: state.style.learningStyleResults,
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, { getLearningStyleResults })(Dashboard);
