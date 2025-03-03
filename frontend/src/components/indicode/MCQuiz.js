import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  getMCQuiz,
  submitQuiz,
  getUserQuizResults,
} from "../../actions/learning";
import * as AsIcons from "react-icons/ai";
import MCQuizPage from "./MCQuizPage";
import { setSidebar } from "../../actions/sidebar";

export class MCQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      questionsPerPage: 1,
      finishedQuiz: false,
      score: 0,
      selected: "",
      answerChecked: false,
    };
  }

  componentDidMount() {
    this.props.getMCQuiz();
    this.props.getUserQuizResults();

    if (this.props.sidebar) {
      this.props.setSidebar();
    }
  }

  onSelectedAnswer = (option) => {
    this.setState(() => ({
      selected: option,
    }));
  };

  onClickMCQBtn = (option, correctAnswer) => {
    if (!this.state.answerChecked) {
      this.setState({
        answerChecked: true,
      });

      if (option === correctAnswer) {
        this.setState({
          score: this.state.score + 1,
        });
      }
    } else if (this.state.currentPage === 5) {
      let streakScore = 0;
      if (this.props.streak) {
        if (this.props.quizResults.length > 0) {
          for (let i = 0; i < this.props.quizResults.length; i++) {
            streakScore = this.props.quizResults[i]["streak"];
          }
        }
      }
      streakScore += 1;

      this.props.submitQuiz(
        this.state.score,
        this.props.lessonNum,
        streakScore
      );
      this.setState({
        finishedQuiz: true,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
      this.setState({
        answerChecked: false,
      });
      this.setState({
        selected: "",
      });
    }
  };

  setCurrentPage = (pageNumber) => {
    this.setState(() => ({
      currentPage: pageNumber,
    }));
  };

  render() {
    let quiz1 = [],
      quiz2 = [];
    for (let lesson of this.props.mcquiz) {
      if (lesson.moduleNum === 1) {
        quiz1.push(lesson);
      } else if (lesson.moduleNum === 2) {
        quiz2.push(lesson);
      }
    }

    let mcqs = quiz1;
    let indent = false;

    if (this.props.lessonNum === 3) {
      mcqs = quiz2;
      indent = true;
    }

    const indexOfLastQ = this.state.currentPage * this.state.questionsPerPage;
    const indexOfFirstQ = indexOfLastQ - this.state.questionsPerPage;
    const currentQs = mcqs.slice(indexOfFirstQ, indexOfLastQ);

    let submitComp = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );

    let showSubmit = false;
    if (this.state.currentPage == 5) {
      showSubmit = true;
    }

    let resultContent = "Quiz Finished";
    let trophyRes = "Not this time, try again!";
    if (this.state.score > 3) {
      trophyRes = "Yes. Congratulations!";
    }

    return (
      <div className="container">
        {this.state.finishedQuiz && (
          <div className="alert alert-info mcquiz-alert">
            <div>
              <div>{resultContent}</div>
              <div>Your score : {this.state.score}/5</div>
              <div>Trophy : {trophyRes}</div>
              <div className="mcq-dash-link">
                <Link to="/">
                  <span className="alert-link mt-3">
                    {`Return to Dashboard `} <AsIcons.AiOutlineRightCircle />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={this.state.finishedQuiz ? "fade-mcq" : ""}>
          <form>
            <h2 className="quiz-title">
              {indent
                ? "Conditions and If Statements"
                : "Variables and Data Types"}{" "}
              Quiz
            </h2>

            <MCQuizPage
              questions={currentQs}
              onSelectedAnswer={this.onSelectedAnswer}
              onClickMCQBtn={this.onClickMCQBtn}
              selected={this.state.selected}
              answerChecked={this.state.answerChecked}
              currentPage={this.state.currentPage}
              indent={indent}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mcquiz: state.learning.mcquiz,
  sidebar: state.sidebar.sidebar,
  quizResults: state.learning.quizResults,
  streak: state.learning.streak,
  lessonNum: state.learning.lessonNum,
});

export default connect(mapStateToProps, {
  getUserQuizResults,
  getMCQuiz,
  setSidebar,
  submitQuiz,
})(MCQuiz);
