import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLearning, getLearningStyleResults } from "../../actions/learning";

export class Learning extends Component {
  static propTypes = {
    learning: PropTypes.array.isRequired,
    getLearning: PropTypes.func.isRequired,
    getLearningStyleResults: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLearning();
    this.props.getLearningStyleResults();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h2>Learning Style Results</h2>
          {this.props.learning.map((learning) => (
            <div key={learning.id}>
              <div>{learning.module}</div>
              <div>{learning.ed_content}</div>
            </div>
          ))}
        </Fragment>
        <Fragment>
          <h2>Learning Coddnvvtent</h2>
          {this.props.learning.map((learning) => (
            <div key={learning.id}>
              <div>{learning.module}</div>
              <div>{learning.ed_content}</div>
            </div>
          ))}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  learning: state.learning.learning,
});

export default connect(mapStateToProps, { getLearning })(Learning);
