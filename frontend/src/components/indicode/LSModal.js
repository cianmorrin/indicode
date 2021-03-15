import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { submitLearningStyle } from "../../actions/questionnaire";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "80vh",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function LSModal({
  open,
  children,
  onClose,
  learningStyleResults,
  submitLearningStyle,
}) {
  if (!open) return null;
  let initialActiveRef = 0;
  let initialSenInt = 0;
  let initialVisVerb = 0;
  let initialSeqGlob = 0;

  const styleArrlen = learningStyleResults.length;

  const [actRef, setActRef] = useState(getActRef);
  const [visVerb, setVisVerb] = useState(getVisVerb);
  const [senInt, setSenInt] = useState(getSenInt);
  const [seqGlob, setSeqGlob] = useState(getSeqGlob);

  const [isExpShown, setisExpShown] = useState(true);
  const [isActShown, setIsActShown] = useState(false);
  const [isRefShown, setIsRefShown] = useState(false);
  const [isSenShown, setIsSenShown] = useState(false);
  const [isIntShown, setIsIntShown] = useState(false);
  const [isVisShown, setIsVisShown] = useState(false);
  const [isVerbShown, setIsVerbShown] = useState(false);
  const [isSeqShown, setIsSeqShown] = useState(false);
  const [isGlobShown, setIsGlobShown] = useState(false);

  const [isYouSureShown, setIsYouSureShown] = useState(false);

  function getActRef() {
    if (styleArrlen > 0) {
      const initialActive = learningStyleResults[styleArrlen - 1].active_score;
      initialActiveRef = 11 - initialActive;
    } else {
      initialActiveRef = 5;
    }
    return initialActiveRef;
  }

  function getVisVerb() {
    if (styleArrlen > 0) {
      const initialVisual = learningStyleResults[styleArrlen - 1].visual_score;
      initialVisVerb = 11 - initialVisual;
    } else {
      initialVisVerb = 6;
    }
    return initialVisVerb;
  }

  function getSenInt() {
    if (styleArrlen > 0) {
      const initialSensing =
        learningStyleResults[styleArrlen - 1].sensing_score;
      initialSenInt = 11 - initialSensing;
    } else {
      initialSenInt = 5;
    }
    return initialSenInt;
  }

  function getSeqGlob() {
    if (styleArrlen > 0) {
      const initialSeq = learningStyleResults[styleArrlen - 1].sequential_score;
      initialSeqGlob = 11 - initialSeq;
    } else {
      initialSeqGlob = 5;
    }
    return initialSeqGlob;
  }

  const data_ar = {
    labels: ["Active", "Reflective"],
    datasets: [
      {
        data: [11 - actRef, actRef],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "left",
    },
  };

  const data_si = {
    labels: ["Sensing", "Intuitive"],
    datasets: [
      {
        data: [11 - senInt, senInt],
        backgroundColor: ["#009933", "#ffce56"],
        hoverBackgroundColor: ["#009933", "#ffce56"],
      },
    ],
  };

  const data_vv = {
    labels: ["Visual", "Verbal"],
    datasets: [
      {
        data: [11 - visVerb, visVerb],
        backgroundColor: ["#58508d", "#ffa600"],
        hoverBackgroundColor: ["#58508d", "#ffa600"],
      },
    ],
  };

  const data_sg = {
    labels: ["Sequential", "Global"],
    datasets: [
      {
        data: [11 - seqGlob, seqGlob],
        backgroundColor: ["#cc00ff", "#003f5c"],
        hoverBackgroundColor: ["#cc00ff", "#003f5c"],
      },
    ],
  };

  function updatedLearningStyle() {
    const learningStyleSubmission = {
      af_a: 11 - actRef,
      af_b: actRef,
      si_a: 11 - senInt,
      si_b: senInt,
      vv_a: 11 - visVerb,
      vv_b: visVerb,
      sg_a: 11 - seqGlob,
      sg_b: seqGlob,
    };
    submitLearningStyle(learningStyleSubmission);
    timedRefresh(100);
    window.location.reload();
  }

  function timedRefresh(timeoutPeriod) {
    setTimeout("onClose();", timeoutPeriod);
  }

  function setActVis() {
    setisExpShown(false);
    setIsActShown(true);
    setIsRefShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setRefVis() {
    setisExpShown(false);
    setIsRefShown(true);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setSenVis() {
    setisExpShown(false);
    setIsSenShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setIntVis() {
    setisExpShown(false);
    setIsIntShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setVisVis() {
    setisExpShown(false);
    setIsVisShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setVerbVis() {
    setisExpShown(false);
    setIsVerbShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsSeqShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setSeqVis() {
    setisExpShown(false);
    setIsSeqShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsGlobShown(false);
    setIsYouSureShown(false);
  }

  function setGlobVis() {
    setisExpShown(false);
    setIsGlobShown(true);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsYouSureShown(false);
  }

  function youSureVis() {
    setisExpShown(false);
    setIsGlobShown(false);
    setIsRefShown(false);
    setIsActShown(false);
    setIsSenShown(false);
    setIsIntShown(false);
    setIsVisShown(false);
    setIsVerbShown(false);
    setIsSeqShown(false);
    setIsYouSureShown(true);
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h2>Learning Style Portal</h2>
        <hr className="my-4"></hr>{" "}
        <div className="ls-res-content">
          <div className="charts-all">
            <div className="modal-pie-charts">
              <div className="pie-slider">
                {" "}
                <div className="d-chart">
                  {" "}
                  <Doughnut data={data_ar} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel" onMouseEnter={() => setActVis()}>
                    Active
                  </span>
                  <input
                    type="range"
                    className="custom-range"
                    id="customRange"
                    value={actRef}
                    onChange={(changeEvent) =>
                      setActRef(changeEvent.target.value)
                    }
                    min={0}
                    max={11}
                  ></input>
                  <span className="rightlabel" onMouseEnter={() => setRefVis()}>
                    Reflective
                  </span>
                </div>
              </div>
              <div className="pie-slider">
                <div className="d-chart">
                  {" "}
                  <Doughnut data={data_si} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel" onMouseEnter={() => setSenVis()}>
                    Sensing
                  </span>
                  <input
                    type="range"
                    className="custom-range"
                    id="customRange"
                    value={senInt}
                    onChange={(changeEvent) =>
                      setSenInt(changeEvent.target.value)
                    }
                    min={0}
                    max={11}
                  ></input>
                  <span className="rightlabel" onMouseEnter={() => setIntVis()}>
                    Intuitive
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-pie-charts">
              <div className="pie-slider">
                <div className="d-chart">
                  {" "}
                  <Doughnut data={data_vv} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel" onMouseEnter={() => setVisVis()}>
                    Visual
                  </span>
                  <input
                    type="range"
                    className="custom-range"
                    id="customRange"
                    value={visVerb}
                    onChange={(changeEvent) =>
                      setVisVerb(changeEvent.target.value)
                    }
                    min={0}
                    max={11}
                  ></input>
                  <span
                    className="rightlabel"
                    onMouseEnter={() => setVerbVis()}
                  >
                    Verbal
                  </span>
                </div>
              </div>
              <div className="pie-slider">
                <div className="d-chart">
                  <Doughnut data={data_sg} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel" onMouseEnter={() => setSeqVis()}>
                    Sequential
                  </span>
                  <input
                    type="range"
                    className="custom-range"
                    id="customRange"
                    value={seqGlob}
                    onChange={(changeEvent) =>
                      setSeqGlob(changeEvent.target.value)
                    }
                    min={0}
                    max={11}
                  ></input>
                  <span
                    className="rightlabel"
                    onMouseEnter={() => setGlobVis()}
                  >
                    Global
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="explanation-box">
              {isExpShown && (
                <div>
                  <h5>Learning Style Explanation</h5>
                  <p>
                    Hover over the domains next to the sliders to get an
                    explanation of the different learning styles!{" "}
                  </p>
                </div>
              )}
              {isActShown && (
                <div>
                  <h5>Active</h5>
                  <p>
                    As the name suggests, active learners prefer to try things
                    out and actively engage with the content, most of the time
                    in groups! If this sounds like your way of learning, slide
                    toward the active domain.{" "}
                  </p>
                </div>
              )}
              {isRefShown && (
                <div>
                  <h5>Reflective</h5>
                  <p>
                    Reflective learners prefer to contemplate the material
                    before taking any actions and enjoy working alone. If slow
                    and steady is a bit more your speed, lean towards
                    reflective.{" "}
                  </p>
                </div>
              )}
              {isSenShown && (
                <div>
                  <h5>Sensing</h5>
                  <p>
                    Sensing learners or 'sensors', have a preference for facts,
                    practical work and concrete thinking. If you prefer to take
                    a more measured approach with tried and tested methods you
                    might just be a sensor!{" "}
                  </p>
                </div>
              )}
              {isIntShown && (
                <div>
                  <h5>Intuitive</h5>
                  <p>
                    As an intuitive learners you would tend to prefer conceptual
                    thinking. If you think of yourself as innovative and love a
                    challenge, slide to intuitive.{" "}
                  </p>
                </div>
              )}
              {isVisShown && (
                <div>
                  <h5>Visual</h5>
                  <p>
                    If pictures, diagrams and charts suit your learning style
                    then visual learning is the way to go! .{" "}
                  </p>
                </div>
              )}
              {isVerbShown && (
                <div>
                  <h5>Verbal</h5>
                  <p>
                    If you prefer a more textual based way of learning, this
                    verbal approach to teaching will suit you.{" "}
                  </p>
                </div>
              )}
              {isSeqShown && (
                <div>
                  <h5>Sequential</h5>
                  <p>
                    When processing information to form an understanding,
                    sequential learners prefer the material to be logically
                    ordered, and to progress gradually. If you like an organised
                    approach, slide towards sequential{" "}
                  </p>
                </div>
              )}
              {isGlobShown && (
                <div>
                  <h5>Global</h5>
                  <p>
                    If things don't always click straight away, and you like to
                    take a step back from material to form an understanding, the
                    global approach could be for you.{" "}
                  </p>
                </div>
              )}
              {isYouSureShown && (
                <div>
                  <h5>You ready?</h5>
                  <p>
                    You can come back and update your style at anytime if you
                    feel like things could work better for you in a different
                    style.{" "}
                  </p>
                </div>
              )}
            </div>
            <button
              className=" btn btn-lg btn-secondary submit-intls-btn"
              onMouseEnter={() => youSureVis()}
              onClick={updatedLearningStyle}
            >
              Update Learning Style
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

const mapStateToProps = (state) => ({
  learningStyleResults: state.style.learningStyleResults,
});

export default connect(mapStateToProps, { submitLearningStyle })(LSModal);
