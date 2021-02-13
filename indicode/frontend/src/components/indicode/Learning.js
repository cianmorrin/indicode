import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLearning } from "../../actions/learning";

export class Learning extends Component {
  // static propTypes = {
  //   learning: PropTypes.array.isRequired,
  //   getLearning: PropTypes.func.isRequired,
  // };

  constructor(props) {
    super(props);
    this.state = { brand: "Ford" };
  }

  componentDidMount() {
    this.props.getLearning();
  }

  render() {
    return (
      <Fragment>
        <h2>Learning Content {this.state.brand}</h2>
        {this.props.learning.map((learning, index) => (
          <div key={index}>
            <div>{learning.module}</div>
            <div>{learning.ed_content}</div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  learning: state.learning.learning,
});

export default connect(mapStateToProps, { getLearning })(Learning);
