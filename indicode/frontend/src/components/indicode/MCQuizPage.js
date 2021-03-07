import React, { Component, Fragment } from "react";
import FinalQ from "../images/final_q1.png";

export class MCQuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelected = (option) => {
    this.props.onSelectedAnswer(option);
  };

  increaseScore = () => {
    this.props.increaseScore();
  };

  onClickMCQButton = (e) => {
    e.preventDefault();

    if (this.props.selected) {
      this.props.onClickMCQBtn(
        this.props.selected,
        this.props.questions[0]["correct"]
      );
    }
  };

  render() {
    let buttonText = "Check Answer";
    let showFinalImg = false;
    if (this.props.answerChecked) {
      if (this.props.currentPage === 5) {
        buttonText = "Finish Quiz";
      } else {
        buttonText = "Next Question";
      }
    }

    let showIndent = this.props.indent;
    if (this.props.currentPage === 5 && this.props.indent) {
      showFinalImg = true;
      showIndent = false;
    }

    return (
      <div>
        <ul className="list-group mb-4">
          {this.props.questions.map((question) => (
            <li key={question.id} className="list-group-item">
              <p className="questionnaire-q">{question.question}</p> <br></br>
              <p className="questionnaire-q">{question.question_1}</p>
              {showFinalImg ? (
                <div>
                  {" "}
                  <img className="final-q" src={FinalQ} />
                </div>
              ) : (
                ""
              )}
              <br></br>
              <div
                id={
                  this.props.answerChecked &&
                  this.props.selected === "option_A" &&
                  this.props.selected === question.correct
                    ? "ans-bg-correct"
                    : this.props.answerChecked &&
                      this.props.selected === "option_A"
                    ? "ans-bg-incorrect"
                    : this.props.answerChecked &&
                      "option_A" === question.correct
                    ? "ans-bg-correct"
                    : "ans-bg"
                }
                className={
                  this.props.selected === "option_A"
                    ? "quiz-answers selected"
                    : "quiz-answers"
                }
                onClick={() => this.onSelected("option_A")}
              >
                <span>{question.option_A}</span>
                <span className={showIndent ? "q-indent" : ""}>
                  {question.option_A_1}
                </span>
              </div>
              <div
                id={
                  this.props.answerChecked &&
                  this.props.selected === "option_B" &&
                  this.props.selected === question.correct
                    ? "ans-bg-correct"
                    : this.props.answerChecked &&
                      this.props.selected === "option_B"
                    ? "ans-bg-incorrect"
                    : this.props.answerChecked &&
                      "option_B" === question.correct
                    ? "ans-bg-correct"
                    : "ans-bg"
                }
                className={
                  this.props.selected === "option_B"
                    ? "quiz-answers selected"
                    : "quiz-answers"
                }
                onClick={() => this.onSelected("option_B")}
              >
                <span>{question.option_B}</span>
                <span className={showIndent ? "q-indent" : ""}>
                  {question.option_B_1}
                </span>
              </div>
              <div
                id={
                  this.props.answerChecked &&
                  this.props.selected === "option_C" &&
                  this.props.selected === question.correct
                    ? "ans-bg-correct"
                    : this.props.answerChecked &&
                      this.props.selected === "option_C"
                    ? "ans-bg-incorrect"
                    : this.props.answerChecked &&
                      "option_C" === question.correct
                    ? "ans-bg-correct"
                    : "ans-bg"
                }
                className={
                  this.props.selected === "option_C"
                    ? "quiz-answers selected"
                    : "quiz-answers"
                }
                onClick={() => this.onSelected("option_C")}
              >
                <span>{question.option_C}</span>
                <span className={showIndent ? "q-indent" : ""}>
                  {question.option_C_1}
                </span>
              </div>
              <div
                id={
                  this.props.answerChecked &&
                  this.props.selected === "option_D" &&
                  this.props.selected === question.correct
                    ? "ans-bg-correct"
                    : this.props.answerChecked &&
                      this.props.selected === "option_D"
                    ? "ans-bg-incorrect"
                    : this.props.answerChecked &&
                      "option_D" === question.correct
                    ? "ans-bg-correct"
                    : "ans-bg"
                }
                className={
                  this.props.selected === "option_D"
                    ? "quiz-answers selected"
                    : "quiz-answers"
                }
                onClick={() => this.onSelected("option_D")}
              >
                <span>{question.option_D}</span>
                <span className={showIndent ? "q-indent" : ""}>
                  {question.option_D_1}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={this.onClickMCQButton}
          className={
            this.props.selected ? "btn btn-primary" : "btn btn-primary disabled"
          }
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default MCQuizPage;
