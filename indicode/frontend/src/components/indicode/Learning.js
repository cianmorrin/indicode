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
    this.props.getLearning();
  }

  render() {
    return (
      <div className="learning">
        <div className="ed-content">
          <h2>Learning Content {}</h2>
          {this.props.learning.map((learning, index) => (
            <div key={index}>
              <div>{learning.module}</div>
              <div>{learning.ed_content}</div>
            </div>
          ))}
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
});

export default connect(mapStateToProps, { getLearning })(Learning);
