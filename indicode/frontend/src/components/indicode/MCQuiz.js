import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getMCQuiz } from "../../actions/learning";
import MCQuizPage from "./MCQuizPage";
import Pagination from "./Pagination";
import { setSidebar } from "../../actions/sidebar";

export class MCQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      questionsPerPage: 1,
      finishedQuix: false,
    };
  }

  componentDidMount() {
    this.props.getMCQuiz();
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

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    // this.props.submitQuestionnaire(this.state);
    // this.setState(() => ({
    //   finishedQuestionnaire: true,
    // }));
  };

  setCurrentPage = (pageNumber) => {
    this.setState(() => ({
      currentPage: pageNumber,
    }));
  };

  render() {
    const indexOfLastQ = this.state.currentPage * this.state.questionsPerPage;
    const indexOfFirstQ = indexOfLastQ - this.state.questionsPerPage;
    const currentQs = this.props.mcquiz.slice(indexOfFirstQ, indexOfLastQ);

    let submitComp = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );

    let showSubmit = false;
    if (this.state.currentPage == 6) {
      showSubmit = true;
    }

    return (
      <div className="container">
        <h1>UPDATED This is the Variables and Data Types Quiz!</h1>
        <form onSubmit={this.onSubmit}>
          <h2>QUIZ</h2>
          <MCQuizPage
            questions={currentQs}
            onChange={this.onChange}
            checked={this.state}
          />
          {showSubmit ? submitComp : ""}
        </form>
        <Pagination
          questionsPerPage={this.state.questionsPerPage}
          totalQs={this.props.mcquiz.length}
          paginate={this.setCurrentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mcquiz: state.learning.mcquiz,
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, { getMCQuiz, setSidebar })(MCQuiz);
