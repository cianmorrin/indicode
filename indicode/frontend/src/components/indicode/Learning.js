import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLearning } from "../../actions/learning";
import { getLearningStyleResults } from "../../actions/questionnaire";
import Var_A_R_Code from "../images/Var_A_R_Code.png";

export class Learning extends Component {
  state = {
    started: false,
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

  render() {
    const act_ref = this.props.learningStyleResults[0].act_or_ref;
    const sen_int = this.props.learningStyleResults[0].sen_or_int;
    const vis_verb = this.props.learningStyleResults[0].vis_or_verb;
    const seq_glob = this.props.learningStyleResults[0].seq_or_glob;

    let title, submodule, act_ref_content, sen_int_sentence, intro;

    if (this.props.learning.length > 0) {
      title = this.props.learning[0].module;
      submodule = this.props.learning[0].sub_module;
      intro = this.props.learning[0].intro;
      switch (act_ref) {
        case "act11":
        case "act9":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].active_3_1}</p>
              <img src={Var_A_R_Code} />
              <p>{this.props.learning[0].active_3_2}</p>
            </Fragment>
          );
          break;
        case "act7":
        case "act5":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].active_2_1}</p>
              <img src={Var_A_R_Code} />
              <p>{this.props.learning[0].active_2_2}</p>
            </Fragment>
          );
          break;
        case "act3":
        case "act1":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].active_1_1}</p>
              <p>{this.props.learning[0].active_1_2}</p>
              <img src={Var_A_R_Code} />
            </Fragment>
          );
          break;
        case "ref11":
        case "ref9":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].reflective_3_1}</p>
              <p>{this.props.learning[0].reflective_3_2}</p>
              <img src={Var_A_R_Code} />
            </Fragment>
          );
          break;
        case "ref7":
        case "ref5":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].reflective_2_1}</p>
              <p>{this.props.learning[0].reflective_2_2}</p>
              <img src={Var_A_R_Code} />
            </Fragment>
          );
          break;
        case "ref3":
        case "ref1":
          act_ref_content = (
            <Fragment>
              <p>{this.props.learning[0].reflective_1_1}</p>
              <p>{this.props.learning[0].reflective_1_2}</p>
              <img src={Var_A_R_Code} />
            </Fragment>
          );
          break;
        default:
          act_ref_content = "No data found";
          break;
      }
      switch (sen_int) {
        case "sen11":
        case "sen9":
          sen_int_sentence = this.props.learning[0].sensing_3;
          break;
        case "sen7":
        case "sen5":
          sen_int_sentence = this.props.learning[0].sensing_2;
          break;
        case "sen3":
        case "sen1":
          sen_int_sentence = this.props.learning[0].sensing_1;
          break;
        case "int11":
        case "int9":
          sen_int_sentence = this.props.learning[0].intuitive_3;
          break;
        case "int7":
        case "int5":
          sen_int_sentence = this.props.learning[0].intuitive_2;
          break;
        case "int3":
        case "int1":
          sen_int_sentence = this.props.learning[0].intuivite_1;
          break;
        default:
          sen_int_sentence = "No data found";
          break;
      }
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
            <h1>{title}</h1>
            <h5>{submodule}</h5>
            <hr className="my-4"></hr>
            <p>{intro}</p>
            {act_ref_content}
          </div>
        </div>
        <div className="interpreter">
          <iframe
            className="interpreter"
            src="https://trinket.io/embed/python/3d8d7ce66b"
            frameBorder="0"
            allowFullScreen
          ></iframe>
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
