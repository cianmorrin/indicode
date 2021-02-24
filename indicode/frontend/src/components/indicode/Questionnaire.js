import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  getQuestionnaire,
  submitQuestionnaire,
} from "../../actions/questionnaire";
import QuestionPage from "./QuestionPage";
import Pagination from "./Pagination";

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
    this.setState(() => ({
      finishedQuestionnaire: true,
    }));
  };

  setCurrentPage = (pageNumber) => {
    this.setState(() => ({
      currentPage: pageNumber,
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

    let submitComp = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );

    let showSubmit = false;
    if (this.state.currentPage == 8) {
      showSubmit = true;
    }

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h1 className="mt-4">Index of Learning Style Questionnaire</h1>
          <hr></hr>
          <QuestionPage
            questions={currentQs}
            onChange={this.onChange}
            checked={this.state}
          />
          {showSubmit ? submitComp : ""}
        </form>
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
});

export default connect(mapStateToProps, {
  getQuestionnaire,
  submitQuestionnaire,
})(Questionnaire);
