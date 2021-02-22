import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLearning } from "../../actions/learning";
import { getLearningStyleResults } from "../../actions/questionnaire";

export class Learning extends Component {
  state = {
    started: false,
  };

  static propTypes = {
    learning: PropTypes.array,
    sidebar: PropTypes.bool,
    learningStyleResults: PropTypes.array.isRequired,
    getLearning: PropTypes.func.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLearningStyleResults();
    console.log("seq_glob", this.props.learningStyleResults[0].seq_or_glob);
  }

  getLearningContent = () => {
    this.props.getLearning();
    this.setState(() => ({
      started: true,
    }));
  };

  render() {
    const act_ref = this.props.learningStyleResults[0].act_or_ref;
    const sen_int = this.props.learningStyleResults[0].sen_or_int;
    const vis_verb = this.props.learningStyleResults[0].vis_or_verb;
    const seq_glob = this.props.learningStyleResults[0].seq_or_glob;

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
            <div>
              <p>{act_ref}</p>
              <p>{sen_int}</p> <p>{vis_verb}</p> <p>{seq_glob}</p>
            </div>
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
