import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Questionnaire from "./Questionnaire";
import QuestionnaireRes from "./QuestionnaireRes";
import { getLearningStyleResults } from "../../actions/questionnaire";

export class Dashboard extends Component {
  static propTypes = {
    learningStyleResults: PropTypes.array.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
    sidebar: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
    console.log("mounted");
  }

  render() {
    const lesResults = this.props.learningStyleResults;
    let showResults;
    if (lesResults.length > 0) {
      showResults = true;
      console.log("lesResults", lesResults);
      console.log(
        "lesResults[0].completed_questionnaire",
        lesResults[0].completed_questionnaire
      );
    } else {
      showResults = false;
    }

    let comp;
    if (showResults === false) {
      comp = <Questionnaire />;
    } else if (showResults === true) {
      console.log("showRes true");
      comp = (
        <QuestionnaireRes
          learningStyleResults={this.props.learningStyleResults}
        />
      );
    } else {
      console.log("showRes else");
    }
    return (
      <Fragment>
        <div className={this.props.sidebar ? "main-window" : "main-window lg"}>
          {comp}
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
