import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getLearning } from "../../actions/learning";
import { getLearningStyleResults } from "../../actions/questionnaire";
import Interpreter from "./Interpreter";
import LearningContent from "./LearningContent";
import LearningPagination from "./LearningPagination";
import Lesson_1_1_Code from "../images/Lesson_1_1_Code.png";
import StringVisual from "../images/string_visual.png";
import NumberVisual from "../images/number_visual.png";
import BooleanVisual from "../images/boolean_visual.png";
import StringVerbal from "../images/verbal_string.png";
import NumberVerbal from "../images/verbal_number.png";
import BooleanVerbal from "../images/verbal_bool.png";

export class Learning extends Component {
  state = {
    started: false,
    currentPage: 1,
    lessonsPerPage: 1,
    finishedModule: false,
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

  render() {
    if (this.state.finishedModule) {
      return <Redirect to="/quiz" />;
    }
    const act_ref = this.props.learningStyleResults[0].act_or_ref;
    const sen_int = this.props.learningStyleResults[0].sen_or_int;
    const vis_verb = this.props.learningStyleResults[0].vis_or_verb;
    const seq_glob = this.props.learningStyleResults[0].seq_or_glob;

    console.log(vis_verb);
    let title, submodule, intro;
    let learning_content_comp, header_comp;

    if (this.props.learning.length > 0) {
      switch (this.state.currentPage) {
        case 1:
          title = this.props.learning[0].module;
          submodule = this.props.learning[0].sub_module;
          intro = this.props.learning[0].intro;
          header_comp = (
            <Fragment>
              <h1>{title}</h1>
              <h5>{submodule}</h5>
              <hr className="my-2"></hr>
              <p>{intro}</p>
            </Fragment>
          );
          switch (act_ref) {
            case "act11":
            case "act9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].active_3_1}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                    <p>{this.props.learning[0].active_3_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "act7":
            case "act5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].active_2_1}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                    <p>{this.props.learning[0].active_2_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "act3":
            case "act1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].active_1_1}</p>
                    <p>{this.props.learning[0].active_1_2}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                  </Fragment>
                </div>
              );
              break;
            case "ref11":
            case "ref9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].reflective_3_1}</p>
                    <p>{this.props.learning[0].reflective_3_2}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                  </Fragment>
                </div>
              );
              break;
            case "ref7":
            case "ref5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].reflective_2_1}</p>
                    <p>{this.props.learning[0].reflective_2_2}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                  </Fragment>
                </div>
              );
              break;
            case "ref3":
            case "ref1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[0].reflective_1_1}</p>
                    <p>{this.props.learning[0].reflective_1_2}</p>
                    <div>
                      {" "}
                      <img className="act-ref-img" src={Lesson_1_1_Code} />
                    </div>
                  </Fragment>
                </div>
              );
              break;
            default:
              learning_content_comp = "No data found";
              break;
          }
          break;
        case 2:
          title = this.props.learning[1].module;
          submodule = this.props.learning[1].sub_module;
          intro = this.props.learning[1].intro;
          header_comp = (
            <Fragment>
              <h1>{title}</h1>
              <h5>{submodule}</h5>
              <hr className="my-2"></hr>
              <p>{intro}</p>
            </Fragment>
          );
          switch (vis_verb) {
            case "vis11":
            case "vis9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <div className="visual-images">
                      <p>{this.props.learning[1].visual_3_1}</p>{" "}
                      <img className="vis-img" src={StringVisual} />
                    </div>
                    <div className="visual-images">
                      <img className="vis-img" src={NumberVisual} />
                      <p>{this.props.learning[1].visual_3_2}</p>
                    </div>
                    <div className="visual-images">
                      <p>{this.props.learning[1].visual_3_3}</p>{" "}
                      <img className="vis-img" src={BooleanVisual} />
                    </div>
                  </Fragment>
                </div>
              );
              break;
            case "vis7":
            case "vis5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[1].visual_3_1}</p>
                    <div className="visual images">
                      {" "}
                      <img className="vis-img" src={StringVisual} />
                      <img className="vis-img" src={NumberVisual} />
                      <img className="vis-img" src={BooleanVisual} />
                    </div>
                    <p>{this.props.learning[1].visual_3_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "vis3":
            case "vis1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[1].visual_3_1}</p>
                    <div className="visual images">
                      {" "}
                      <img className="vis-img" src={StringVisual} />
                      <img className="vis-img" src={NumberVisual} />
                      <img className="vis-img" src={BooleanVisual} />
                    </div>
                    <p>{this.props.learning[1].visual_3_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "ver11":
            case "ver9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <div className="verbal-images">
                      <img className="ver-img" src={StringVerbal} />
                      <p>{this.props.learning[1].visual_3_1}</p>{" "}
                    </div>
                    <div className="verbal-images">
                      <img className="ver-img" src={NumberVerbal} />
                      <p>{this.props.learning[1].visual_3_2}</p>
                    </div>
                    <div className="ver-images">
                      <img className="ver-img" src={BooleanVerbal} />
                      <p>{this.props.learning[1].visual_3_3}</p>{" "}
                    </div>
                  </Fragment>
                </div>
              );
              break;
            case "ver7":
            case "ver5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[1].verbal_2_1}</p>
                    <p>{this.props.learning[1].verbal_2_2}</p>
                    <p>{this.props.learning[1].verbal_2_3}</p>
                  </Fragment>
                </div>
              );
              break;
            case "ver3":
            case "ver1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[1].verbal_1_1}</p>
                    <p>{this.props.learning[1].verbal_1_2}</p>
                    <p>{this.props.learning[1].verbal_1_3}</p>
                  </Fragment>
                </div>
              );
              break;
            default:
              learning_content_comp = "No data found";
              break;
          }
          break;
        case 3:
          title = this.props.learning[2].module;
          submodule = this.props.learning[2].sub_module;
          intro = this.props.learning[2].intro;
          header_comp = (
            <Fragment>
              <h1>{title}</h1>
              <h5>{submodule}</h5>
              <hr className="my-2"></hr>
              <p>{intro}</p>
            </Fragment>
          );
          switch (sen_int) {
            case "sen11":
            case "sen9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].sensing_3}</p>
                  </Fragment>
                </div>
              );
              break;
            case "sen7":
            case "sen5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].sensing_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "sen3":
            case "sen1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].sensing_1}</p>
                  </Fragment>
                </div>
              );
              break;
            case "int11":
            case "int9":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].intuitive_3}</p>
                  </Fragment>
                </div>
              );
              break;
            case "int7":
            case "int5":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].intuitive_2}</p>
                  </Fragment>
                </div>
              );
              break;
            case "int3":
            case "int1":
              learning_content_comp = (
                <div>
                  {header_comp}
                  <Fragment>
                    <p>{this.props.learning[2].intuitive_2}</p>
                  </Fragment>
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

    let finishComp = (
      <div className="form-group">
        Let's test your knowlege with the Module Quiz!
        <div>
          <button type="submit" className="btn btn-primary">
            Finished
          </button>
        </div>
      </div>
    );

    let showFinish = false;
    if (this.state.currentPage == 3) {
      showFinish = true;
    }

    return (
      <div className="learning">
        <div className="ed-content">
          <div
            className={
              this.state.started
                ? "card border-secondary mb-3 start-learning-hide"
                : "card border-secondary mb-3 start-learning"
            }
          >
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
          <div className={this.state.started ? "show-up" : "no-show"}>
            <form onSubmit={this.onFinish}>
              <LearningContent lesson={learning_content_comp} />
              {showFinish ? finishComp : ""}
            </form>
            <LearningPagination
              lessonsPerPage={this.state.lessonsPerPage}
              totalLessons={3}
              paginate={this.setCurrentPage}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
        <div className="interpreter">
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
});

export default connect(mapStateToProps, {
  getLearning,
  getLearningStyleResults,
})(Learning);
