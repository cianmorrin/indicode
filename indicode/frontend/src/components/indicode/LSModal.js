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
        <h2>Learning Style Results</h2>
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
                  <span className="leftlabel">Active</span>
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
                  <span className="rightlabel">Reflective</span>
                </div>
              </div>
              <div className="pie-slider">
                <div className="d-chart">
                  {" "}
                  <Doughnut data={data_si} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel">Sensing</span>
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
                  <span className="rightlabel">Intuitive</span>
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
                  <span className="leftlabel">Visual</span>
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
                  <span className="rightlabel">Verbal</span>
                </div>
              </div>
              <div className="pie-slider">
                <div className="d-chart">
                  <Doughnut data={data_sg} options={options} />
                </div>
                <div className="slider-whole">
                  <span className="leftlabel">Sequential</span>
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
                  <span className="rightlabel">Global</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className=" btn btn-lg btn-secondary submit-intls-btn"
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
