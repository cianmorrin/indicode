import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getLearning,
  getUserQuizResults,
  whatQuiz,
} from "../../actions/learning";
import { getLearningStyleResults } from "../../actions/questionnaire";
import Interpreter from "./Interpreter";
import LearningContent from "./LearningContent";
import LearningPagination from "./LearningPagination";
import Lesson_1_1_Code from "../images/Lesson_1_1_Code.png";
import Lesson_2_1_Code from "../images/Lesson_2_1_code.png";
import Lesson_2_Operators from "../images/Lesson_2_operators.png";
import Var_Assignment from "../images/var_assignment.png";
import Var_Print from "../images/var_print_out.png";
import StringVisual from "../images/string_visual.png";
import NumberVisual from "../images/number_visual.png";
import BooleanVisual from "../images/boolean_visual.png";
import StringVerbal from "../images/verbal_string.png";
import NumberVerbal from "../images/verbal_num.png";
import BooleanVerbal from "../images/verbal_bool.png";
import Instructions from "../images/instructions.png";
import IfImg from "../images/if.png";
import IfElseImg from "../images/if_else.png";
import IfCode from "../images/if_code.png";
import IfElseCode from "../images/if_else_code.png";
import IfElseSyntax from "../images/if_else_syntax.png";
import * as TiIcons from "react-icons/ti";

export class Learning extends Component {
  state = {
    chosenMod: false,
    started: false,
    currentPage: 1,
    lessonsPerPage: 1,
    finishedModule: false,
    whichModule: 0,
  };

  static propTypes = {
    learning: PropTypes.array.isRequired,
    sidebar: PropTypes.bool,
    learningStyleResults: PropTypes.array.isRequired,
    getLearning: PropTypes.func.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
    this.props.getLearning();
    this.props.getUserQuizResults();
  }

  getLearningContent = () => {
    this.setState(() => ({
      started: true,
    }));
  };

  onFinish = (e) => {
    e.preventDefault();
    this.setState(() => ({
      finishedModule: true,
    }));
  };

  setCurrentPage = (pageNumber) => {
    this.setState(() => ({
      currentPage: pageNumber,
    }));
  };

  moduleClicked = (modNum) => {
    let chosenModule = modNum.currentTarget.dataset.id;
    console.log("chosenModule", chosenModule);

    if (chosenModule === "2") {
      console.log("should be setting whichmodule state");
      this.setState(() => ({
        whichModule: 3,
      }));
    }
    this.setState(() => ({
      chosenMod: true,
    }));
  };

  render() {
    if (this.props.learningStyleResults.length === 0) {
      return <Redirect to="/" />;
    }

    let module1Completed = false,
      module2Completed = false,
      module3Completed = false;

    let module1Clickable = true,
      module2Clickable = false,
      module3Clickable = false;

    if (this.props.quizResults.length > 0) {
      this.props.quizResults.forEach(function (entry) {
        if (entry.quiz_no === 1) {
          module1Completed = true;
          module2Clickable = true;
        }
        if (entry.quiz_no === 2) {
          module2Completed = true;
          module3Clickable = true;
        }
      });
    }

    if (this.state.finishedModule) {
      this.props.whatQuiz(this.state.whichModule);
      return <Redirect to="/quiz" />;
    }

    let showExtraImg = false;
    let firstActiveImg = Lesson_1_1_Code;
    let firstReflectiveImg = Var_Assignment;
    let visualImg1 = StringVisual;
    let visualImg2 = NumberVisual;
    let visualImg3 = BooleanVisual;
    let verbalImg1 = StringVerbal;
    let verbalImg2 = NumberVerbal;
    if (this.state.whichModule === 3) {
      showExtraImg = true;
      firstActiveImg = Lesson_2_1_Code;
      firstReflectiveImg = Lesson_2_Operators;
      visualImg1 = IfImg;
      visualImg2 = IfElseImg;
      visualImg3 = IfElseCode;
      verbalImg1 = IfElseSyntax;
      verbalImg2 = IfElseCode;
    }

    const styleArrlen = this.props.learningStyleResults.length;
    const act_ref = this.props.learningStyleResults[styleArrlen - 1].act_or_ref;
    const sen_int = this.props.learningStyleResults[styleArrlen - 1].sen_or_int;
    const vis_verb = this.props.learningStyleResults[styleArrlen - 1]
      .vis_or_verb;
    const seq_glob = this.props.learningStyleResults[styleArrlen - 1]
      .seq_or_glob;

    let title, submodule, intro;
    let learning_content_comp, header_comp;

    let theMod = this.state.whichModule;
    console.log("this.state.whichModule", this.state.whichModule);
    if (this.props.learning.length > 0) {
      console.log("theMod", theMod);
      switch (this.state.currentPage) {
        case 1:
          console.log("Learning Comp learning array", this.props.learning);
          title = this.props.learning[theMod].module;
          submodule = this.props.learning[theMod].sub_module;
          intro = this.props.learning[theMod].intro;
          header_comp = (
            <div className="learning-content-header">
              <h1>{title}</h1>
              <h5>{submodule}</h5>
              <hr className="my-2"></hr>
            </div>
          );
          switch (act_ref) {
            case "act11":
            case "act9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].active_3_1}</p>
                    <div>
                      {" "}
                      <img
                        className={
                          showExtraImg ? "act-ref-img sml" : "act-ref-img"
                        }
                        src={firstActiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].active_3_2}</p>
                    {showExtraImg ? (
                      <div>
                        {" "}
                        <img
                          className={
                            showExtraImg ? "act-ref-img sml" : "act-ref-img"
                          }
                          src={Lesson_2_Operators}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p>{this.props.learning[theMod].active_3_3}</p>
                  </div>
                </div>
              );
              break;
            case "act7":
            case "act5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].active_2_1}</p>
                    <div>
                      {" "}
                      <img
                        className={
                          showExtraImg ? "act-ref-img sml" : "act-ref-img"
                        }
                        src={firstActiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].active_2_2}</p>
                    {showExtraImg ? (
                      <div>
                        {" "}
                        <img
                          className={
                            showExtraImg ? "act-ref-img sml" : "act-ref-img"
                          }
                          src={Lesson_2_Operators}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p>{this.props.learning[theMod].active_2_3}</p>
                  </div>
                </div>
              );
              break;
            case "act3":
            case "act1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].active_1_1}</p>
                    <div>
                      <img
                        className={
                          showExtraImg ? "act-ref-img sml" : "act-ref-img"
                        }
                        src={firstActiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].active_1_2}</p>

                    {showExtraImg ? (
                      <div>
                        {" "}
                        <img
                          className={
                            showExtraImg ? "act-ref-img sml" : "act-ref-img"
                          }
                          src={Lesson_2_Operators}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p>{this.props.learning[theMod].active_1_3}</p>
                  </div>
                </div>
              );
              break;
            case "ref11":
            case "ref9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].reflective_3_1}</p>
                    <div>
                      <img
                        className={showExtraImg ? "ref-img sml" : "ref-img"}
                        src={firstReflectiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].reflective_3_2}</p>

                    {showExtraImg ? (
                      ""
                    ) : (
                      <div>
                        <img className="ref-img" src={Var_Print} />
                      </div>
                    )}
                    <p>{this.props.learning[theMod].reflective_3_3}</p>
                  </div>
                </div>
              );
              break;
            case "ref7":
            case "ref5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].reflective_2_1}</p>
                    <div>
                      <img
                        className={showExtraImg ? "ref-img sml" : "act-ref-img"}
                        src={firstReflectiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].reflective_2_2}</p>
                    {showExtraImg ? (
                      ""
                    ) : (
                      <div>
                        <img className="ref-img" src={Var_Print} />
                      </div>
                    )}
                    <p>{this.props.learning[theMod].reflective_2_3}</p>
                  </div>
                </div>
              );
              break;
            case "ref3":
            case "ref1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <p>{this.props.learning[theMod].reflective_1_1}</p>
                    <p>{this.props.learning[theMod].reflective_1_2}</p>
                    <div>
                      {" "}
                      <img
                        className={showExtraImg ? "ref-img sml" : "act-ref-img"}
                        src={firstReflectiveImg}
                      />
                    </div>
                    <p>{this.props.learning[theMod].reflective_1_3}</p>
                  </div>
                </div>
              );
              break;
            default:
              learning_content_comp = "No data found";
              break;
          }
          break;
        case 2:
          title = this.props.learning[theMod + 1].module;
          submodule = this.props.learning[theMod + 1].sub_module;
          intro = this.props.learning[theMod + 1].intro;
          header_comp = (
            <Fragment>
              <div className="learning-content-header">
                <h1>{title}</h1>
                <h5>{submodule}</h5>
                <hr className="my-2"></hr>
              </div>
            </Fragment>
          );
          switch (vis_verb) {
            case "vis11":
            case "vis9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div className="visual-images">
                      <div>
                        <p>{this.props.learning[theMod + 1].visual_3_1}</p>{" "}
                        {showExtraImg ? (
                          <img className="if-code" src={IfCode} />
                        ) : (
                          ""
                        )}
                      </div>
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg1}
                      />
                    </div>
                    <div className="visual-images">
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg2}
                      />
                      <p>{this.props.learning[theMod + 1].visual_3_2}</p>
                    </div>
                    <div className="visual-images">
                      <p>{this.props.learning[theMod + 1].visual_3_3}</p>{" "}
                      <img
                        className={showExtraImg ? "if-else-code" : "vis-img"}
                        src={visualImg3}
                      />
                    </div>
                    <p>{this.props.learning[theMod + 1].active_1_1}</p>
                  </div>
                </div>
              );
              break;
            case "vis7":
            case "vis5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div className="visual-images">
                      <div>
                        <p>{this.props.learning[theMod + 1].visual_2_1}</p>{" "}
                        {showExtraImg ? (
                          <img className="if-code" src={IfCode} />
                        ) : (
                          ""
                        )}
                      </div>
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg1}
                      />
                    </div>
                    <div className="visual-images">
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg2}
                      />
                      <p>{this.props.learning[theMod + 1].visual_2_2}</p>
                    </div>
                    <div className="visual-images">
                      <p>{this.props.learning[theMod + 1].visual_2_3}</p>{" "}
                      <img
                        className={showExtraImg ? "if-else-code" : "vis-img"}
                        src={visualImg3}
                      />
                    </div>
                    <p>{this.props.learning[theMod + 1].active_1_1}</p>
                  </div>
                </div>
              );
              break;
            case "vis3":
            case "vis1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div className="visual-images">
                      <div>
                        <p>{this.props.learning[theMod + 1].visual_1_1}</p>{" "}
                        {showExtraImg ? (
                          <img className="if-code" src={IfCode} />
                        ) : (
                          ""
                        )}
                      </div>
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg1}
                      />
                    </div>
                    <div className="visual-images">
                      <img
                        className={showExtraImg ? "vis-img lg" : "vis-img"}
                        src={visualImg2}
                      />
                      <p>{this.props.learning[theMod + 1].visual_1_2}</p>
                    </div>
                    <div className="visual-images">
                      <p>{this.props.learning[theMod + 1].visual_1_3}</p>{" "}
                      <img
                        className={showExtraImg ? "if-else-code" : "vis-img"}
                        src={visualImg3}
                      />
                    </div>
                    <p>{this.props.learning[theMod + 1].active_1_1}</p>
                  </div>
                </div>
              );
              break;
            case "verb11":
            case "verb9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_1}</h4>
                      <p>{this.props.learning[theMod + 1].verbal_3_1}</p>{" "}
                      <img
                        className={showExtraImg ? "syntax-img" : "ver-img"}
                        src={verbalImg1}
                      />
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_2}</h4>
                      <img
                        className={
                          showExtraImg ? "if-else-code left" : "ver-img"
                        }
                        src={verbalImg2}
                      />
                      <p>{this.props.learning[theMod + 1].verbal_3_2}</p>
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_3}</h4>
                      {showExtraImg ? (
                        ""
                      ) : (
                        <div>
                          <img className="ver-img" src={BooleanVerbal} />
                        </div>
                      )}
                      <p>{this.props.learning[theMod + 1].verbal_3_3}</p>{" "}
                    </div>
                  </div>
                </div>
              );
              break;
            case "verb7":
            case "verb5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_1}</h4>
                      <p>{this.props.learning[theMod + 1].verbal_2_1}</p>{" "}
                      <img
                        className={showExtraImg ? "syntax-img" : "ver-img"}
                        src={verbalImg1}
                      />
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_2}</h4>
                      <img
                        className={
                          showExtraImg ? "if-else-code left" : "ver-img"
                        }
                        src={verbalImg2}
                      />
                      <p>{this.props.learning[theMod + 1].verbal_2_2}</p>
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_3}</h4>
                      {showExtraImg ? (
                        ""
                      ) : (
                        <div>
                          <img className="ver-img" src={BooleanVerbal} />
                        </div>
                      )}
                      <p>{this.props.learning[theMod + 1].verbal_1_3}</p>{" "}
                    </div>
                  </div>
                </div>
              );
              break;
            case "verb3":
            case "verb1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_1}</h4>
                      <p>{this.props.learning[theMod + 1].verbal_1_1}</p>{" "}
                      <img
                        className={showExtraImg ? "syntax-img" : "ver-img"}
                        src={verbalImg1}
                      />
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_2}</h4>
                      <img
                        className={
                          showExtraImg ? "if-else-code left" : "ver-img"
                        }
                        src={verbalImg2}
                      />
                      <p>{this.props.learning[theMod + 1].verbal_1_2}</p>
                    </div>
                    <div
                      className={
                        showExtraImg ? "visual-images" : "verbal-images"
                      }
                    >
                      <h4>{this.props.learning[theMod + 1].verbal_title_3}</h4>
                      {showExtraImg ? (
                        ""
                      ) : (
                        <div>
                          <img className="ver-img" src={BooleanVerbal} />
                        </div>
                      )}
                      <p>{this.props.learning[theMod + 1].verbal_1_3}</p>{" "}
                    </div>
                  </div>
                </div>
              );
              break;
            default:
              learning_content_comp = "No data found";
              break;
          }
          break;
        case 3:
          title = this.props.learning[theMod + 2].module;
          submodule = this.props.learning[theMod + 2].sub_module;
          intro = this.props.learning[theMod + 2].intro;
          header_comp = (
            <div className="learning-content-header">
              <h1>{title}</h1>
              <h5>{submodule}</h5>
              <hr className="my-2"></hr>
            </div>
          );
          switch (sen_int) {
            case "sen11":
            case "sen9":
            case "sen7":
            case "sen5":
            case "sen3":
            case "sen1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <h4 className="mt-2">Challenge 1</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].sensing_1}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_1_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_1_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_1_3}
                        </p>
                      </div>
                    </div>
                    <h4 className="mt-4">Challenge 2</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].sensing_2}</p>
                    <p>{this.props.learning[theMod + 2].verbal_2_1}</p>
                    <p>{this.props.learning[theMod + 2].verbal_2_2}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample2">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_2_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_2_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_2_3}
                        </p>
                        <p className="else">
                          {this.props.learning[theMod + 2].active_3_1}
                        </p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_3_2}
                        </p>
                      </div>
                    </div>
                    <h4 className="mt-4">Challenge 3</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].sensing_3}</p>
                    <p>{this.props.learning[theMod + 2].verbal_3_1}</p>
                    <p>{this.props.learning[theMod + 2].verbal_3_2}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample3">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_3_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_3_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].reflective_1_3}
                        </p>
                        <p className="else">
                          {this.props.learning[theMod + 2].reflective_2_1}
                        </p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].reflective_2_2}
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      Let's test your knowlege with the Module Quiz!
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Finished
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case "int11":
            case "int9":
            case "int7":
            case "int5":
            case "int3":
            case "int1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <div className="learning-content-body">
                    <p>{intro}</p>
                    <h4 className="mt-4">Challenge 1</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].intuitive_1}</p>
                    <p>{this.props.learning[theMod + 2].verbal_title_1}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_1_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_1_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_1_3}
                        </p>
                      </div>
                    </div>
                    <h4 className="mt-4">Challenge 2</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].intuitive_2}</p>
                    <p>{this.props.learning[theMod + 2].verbal_1_1}</p>
                    <p>{this.props.learning[theMod + 2].verbal_1_2}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample2">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_2_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_2_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_2_3}
                        </p>
                        <p className="else">
                          {this.props.learning[theMod + 2].active_3_1}
                        </p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].active_3_2}
                        </p>
                      </div>
                    </div>
                    <h4 className="mt-4">Challenge 3</h4>
                    <hr className="my-2"></hr>
                    <p>{this.props.learning[theMod + 2].intuitive_3}</p>
                    <p>{this.props.learning[theMod + 2].visual_3_1}</p>
                    <p>{this.props.learning[theMod + 2].visual_3_2}</p>
                    <p>
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show answer
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample3">
                      <div className="card card-body">
                        <p>{this.props.learning[theMod + 2].code_answer_3_1}</p>
                        <p>{this.props.learning[theMod + 2].code_answer_3_2}</p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].reflective_1_3}
                        </p>
                        <p className="else">
                          {this.props.learning[theMod + 2].reflective_2_1}
                        </p>
                        <p className="indent">
                          {this.props.learning[theMod + 2].reflective_2_2}
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      Let's test your knowlege with the Module Quiz!
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Finished
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            default:
              learning_content_comp = "No data found";
              break;
          }
          break;
        default:
          learning_content_comp = "No data found";
      }
    }

    let showFinish = false;
    if (this.state.currentPage == 3) {
      showFinish = true;
    }

    return (
      <div className="learning">
        <div className={this.props.sidebar ? "ed-content" : "ed-content lg"}>
          {this.state.chosenMod ? (
            <div>
              <div
                className={
                  this.state.started ? "start-learning-hide" : "start-learning"
                }
              >
                <div className="learning-content-header">
                  <h1>Instructions</h1>
                  <h5>Make sure to read before starting</h5>
                  <hr className="my-2"></hr>
                </div>
                <img className="instructions-img" src={Instructions} />
                <div className="card start-lesson-card border-secondary mb-3">
                  <div className="card-body">
                    <h4 className="card-title">Ready?</h4>
                    <p className="card-text">Start your lesson here</p>
                    <span
                      onClick={this.getLearningContent}
                      className="btn btn-primary btn-med"
                    >
                      Go
                    </span>
                  </div>
                </div>
              </div>
              <div className={this.state.started ? "show-up" : "no-show"}>
                <form onSubmit={this.onFinish}>
                  <LearningContent lesson={learning_content_comp} />
                </form>
                <LearningPagination
                  lessonsPerPage={this.state.lessonsPerPage}
                  totalLessons={3}
                  paginate={this.setCurrentPage}
                  currentPage={this.state.currentPage}
                />
              </div>
            </div>
          ) : (
            <div className="module-options">
              <div className="learning-content-header mb-3">
                <h1>Module Options</h1>
                <h5>Chose your lesson</h5>
                <hr className="my-2"></hr>
              </div>
              <ul className="list-group mt-3">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center module-choice-clickable"
                  onClick={this.moduleClicked.bind(this)}
                  data-id="1"
                >
                  Variables & Data Types
                  {module1Completed ? (
                    <span className="badge compeleted-icon">
                      {<TiIcons.TiTickOutline />}
                    </span>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={
                    module2Clickable
                      ? "list-group-item d-flex justify-content-between align-items-center module-choice-clickable"
                      : "list-group-item d-flex justify-content-between align-items-center module-choice"
                  }
                  onClick={
                    module2Clickable ? this.moduleClicked.bind(this) : () => {}
                  }
                  data-id="2"
                >
                  Conditions & If Statements{" "}
                  {module2Completed ? (
                    <span className="badge compeleted-icon">
                      {" "}
                      {<TiIcons.TiTickOutline />}
                    </span>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={
                    module3Clickable
                      ? "list-group-item d-flex justify-content-between align-items-center module-choice-clickable"
                      : "list-group-item d-flex justify-content-between align-items-center module-choice"
                  }
                  onClick={
                    module3Clickable ? this.moduleClicked.bind(this) : () => {}
                  }
                  data-id="3"
                >
                  Loops{" "}
                  {module3Completed ? <span className="badge">Tick</span> : ""}
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={
            this.props.sidebar ? "interpreter-div" : "interpreter-div lg"
          }
        >
          <Interpreter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  learning: state.learning.learning,
  sidebar: state.sidebar.sidebar,
  learningStyleResults: state.style.learningStyleResults,
  quizResults: state.learning.quizResults,
});

export default connect(mapStateToProps, {
  getLearning,
  getLearningStyleResults,
  getUserQuizResults,
  whatQuiz,
})(Learning);
