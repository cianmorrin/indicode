import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  getQuestionnaire,
  submitQuestionnaire,
} from "../../actions/questionnaire";
import QuestionPage from "./QuestionPage";
import Pagination from "./Pagination";
import { setSidebar } from "../../actions/sidebar";
import * as BiIcons from "react-icons/bi";

export class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      questionsPerPage: 6,
      finishedQuestionnaire: false,
    };
  }

  componentDidMount() {
    this.props.getQuestionnaire();
    if (this.props.sidebar) {
      this.props.setSidebar();
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmitQ = () => {
    this.props.submitQuestionnaire(this.state);
    window.location.reload();
  };

  setCurrentPage = (pageNumber) => {
    this.setState(() => ({
      currentPage: pageNumber,
    }));
  };

  arrowClick = () => {
    this.setState(() => ({
      finishedQuestionnaire: true,
    }));
  };

  render() {
    if (this.state.finishedQuestionnaire) {
      return <Redirect to="/" />;
    }
    const indexOfLastQ = this.state.currentPage * this.state.questionsPerPage;
    const indexOfFirstQ = indexOfLastQ - this.state.questionsPerPage;
    const currentQs = this.props.questionnaire.slice(
      indexOfFirstQ,
      indexOfLastQ
    );

    let showSubmit = false;
    if (this.state.currentPage == 8) {
      showSubmit = true;
    }

    let stateLen = Object.keys(this.state).length;
    let questionnaireCompleted = false;

    stateLen > 46
      ? (questionnaireCompleted = true)
      : (questionnaireCompleted = false);

    let submitComp = (
      <div>
        <button
          onClick={this.onSubmitQ}
          disabled={questionnaireCompleted ? false : true}
          className={
            questionnaireCompleted
              ? "btn btn-primary"
              : "btn btn-primary disabled"
          }
        >
          Submit
        </button>
      </div>
    );

    return (
      <div className="container">
        <div>
          <div className="header-arrow">
            <span className="back-arrow" onClick={this.arrowClick}>
              {<BiIcons.BiArrowBack />}
            </span>
            <h1 className="mt-4">Index of Learning Style Questionnaire</h1>
          </div>
          <hr className="questionnaire-hr"></hr>
          <QuestionPage
            questions={currentQs}
            onChange={this.onChange}
            checked={this.state}
          />
          {showSubmit ? submitComp : ""}
        </div>
        <Pagination
          questionsPerPage={this.state.questionsPerPage}
          totalQs={this.props.questionnaire.length}
          paginate={this.setCurrentPage}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionnaire: state.questionnaire.questionnaire,
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, {
  getQuestionnaire,
  submitQuestionnaire,
  setSidebar,
})(Questionnaire);
