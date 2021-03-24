import React, { Component } from "react";
import { connect } from "react-redux";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { setSidebar } from "../../actions/sidebar";

export class Explore extends Component {
  componentDidMount() {
    if (this.props.sidebar) {
      this.props.setSidebar();
    }
  }

  render() {
    return (
      <div className="container">
        <div className={this.props.sidebar ? "faqwindow" : "faqwindow lg"}>
          <div className="faqtitle">
            <h1>Explore</h1>
          </div>
          <div className="explore-content">
            <div className="left-ex-box">
              <div className="xb-title lxt">
                <div className="btm-panel-icon">
                  <MdIcons.MdLibraryBooks />
                </div>
                <div className="exp-panel-text">Learning Styles</div>
              </div>
              <div className="ls-explanaitions ls-1">
                <span
                  className="ls-explanaitions-title"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {"Active & Reflective"}
                </span>
                <div className="collapse" id="collapse1">
                  <div className="ls-exp-txt">
                    <p>
                      As the name suggests, active learners prefer to try things
                      out and actively engage with the content, most of the time
                      in groups!
                    </p>
                    <p>
                      Reflective learners prefer to contemplate the material
                      before taking any actions and enjoy working alone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ls-explanaitions">
                <span
                  className="ls-explanaitions-title"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {"Visual & Verbal"}
                </span>
                <div className="collapse" id="collapse2">
                  <div className="ls-exp-txt">
                    <p>
                      Visual learner love diagrams and charts as their method of
                      learning.
                    </p>
                    <p>
                      Verbal learners prefer more textual based content and take
                      in what they hear
                    </p>
                  </div>
                </div>
              </div>
              <div className="ls-explanaitions">
                <span
                  className="ls-explanaitions-title"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {"Sensing & Intuitive"}
                </span>
                <div className="collapse" id="collapse3">
                  <div className="ls-exp-txt">
                    <p>
                      Sensing learners or 'sensors', have a preference for
                      facts, practical work and concrete thinking.
                    </p>
                    <p>
                      As an intuitive learners you would tend to prefer
                      conceptual thinking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ls-explanaitions">
                <span
                  className="ls-explanaitions-title"
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {"Sequential & Global"}
                </span>
                <div className="collapse" id="collapse4">
                  <div className="ls-exp-txt">
                    <p>
                      When processing information to form an understanding,
                      sequential learners prefer the material to be logically
                      ordered, and to progress gradually.
                    </p>
                    <p>
                      A global learner may find it more difficult to grasp a
                      concept at first, but will have an overall understanding
                      and fill in the details later
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-ex-box">
              <div className="xb-title rxt">
                <div className="btm-panel-icon resource">
                  <RiIcons.RiStackFill />
                </div>
                <div className="exp-panel-text">External Python Resources</div>
              </div>
              <div className="ls-explanaitions ls-1">
                <span className="ls-explanaitions-title">
                  <a href="https://www.python.org/doc/" target="_blank">
                    [Download] Python.org
                  </a>
                </span>
              </div>
              <div className="ls-explanaitions">
                <span className="ls-explanaitions-title">
                  <a
                    href="https://www.tutorialspoint.com/python3/index.htm"
                    target="_blank"
                  >
                    [Text] Tutorials Point - Python3
                  </a>
                </span>
              </div>
              <div className="ls-explanaitions">
                <span className="ls-explanaitions-title">
                  <a
                    href="https://www.youtube.com/watch?v=YYXdXT2l-Gg&list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7"
                    target="_blank"
                  >
                    [Video] Beginner Python Tutorial
                  </a>
                </span>
              </div>
              <div className="ls-explanaitions">
                <span className="ls-explanaitions-title">
                  <a
                    href="https://www.youtube.com/watch?v=rfscVS0vtbw"
                    target="_blank"
                  >
                    [Video] Learn Python
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, { setSidebar })(Explore);
