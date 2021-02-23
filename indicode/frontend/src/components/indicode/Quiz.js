import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  getQuestionnaire,
  submitQuestionnaire,
} from "../../actions/questionnaire";
import QuestionPage from "./QuestionPage";
import Pagination from "./Pagination";

export class Quiz extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentPage: 1,
  //       questionsPerPage: 8,
  //       finishedQuestionnaire: false,
  //     };
  //   }

  //   componentDidMount() {
  //     this.props.getQuestionnaire();
  //   }

  //   onChange = (e) => {
  //     const { name, value } = e.target;

  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.submitQuestionnaire(this.state);
  //     this.setState(() => ({
  //       finishedQuestionnaire: true,
  //     }));
  //   };

  //   setCurrentPage = (pageNumber) => {
  //     this.setState(() => ({
  //       currentPage: pageNumber,
  //     }));
  //   };

  render() {
    // if (this.state.finishedQuestionnaire) {
    //   return <Redirect to="/" />;
    // }
    // const indexOfLastQ = this.state.currentPage * this.state.questionsPerPage;
    // const indexOfFirstQ = indexOfLastQ - this.state.questionsPerPage;
    // const currentQs = this.props.questionnaire.slice(
    //   indexOfFirstQ,
    //   indexOfLastQ
    // );

    // let submitComp = (
    //   <div className="form-group">
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </div>
    // );

    // let showSubmit = false;
    // if (this.state.currentPage == 6) {
    //   showSubmit = true;
    // }

    return (
      <div>
        <h1>This is the Variables and Data Types Quiz!</h1>
        {/* <form onSubmit={this.onSubmit}>
          <h2>Questionnaire</h2>
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
        /> */}
      </div>
    );
  }
}

export default Quiz;
// const mapStateToProps = (state) => ({
//   questionnaire: state.questionnaire.questionnaire,
// });

// export default connect(mapStateToProps, {
//   getQuestionnaire,
//   submitQuestionnaire,
// })(Quiz);
