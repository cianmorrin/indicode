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
    this.state = {};
  }

  componentDidMount() {
    console.log("learning mounted");
    this.props.getLearning();
  }

  render() {
    return (
      <Fragment>
        <div className={this.props.sidebar ? "main-window" : "main-window lg"}>
          <h2>Learning cContent {}</h2>
          {this.props.learning.map((learning, index) => (
            <div key={index}>
              <div>{learning.module}</div>
              <div>{learning.ed_content}</div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  learning: state.learning.learning,
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, { getLearning })(Learning);
