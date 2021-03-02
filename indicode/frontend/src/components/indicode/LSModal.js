import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { submitLearningStyle } from "../../actions/questionnaire";
import RangeSlider from "react-bootstrap-range-slider";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "70vh",
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
  let initialActive = 0,
    initialRef = 0;
  let initialSen = 0,
    initialInt = 0;
  let initialVis = 0,
    initialVerb = 0;
  let initialSeq = 0,
    initialGlob = 0;

  const styleArrlen = learningStyleResults.length;
  const [latestActive, setActive] = useState(getAct);
  const [latestRef, setRef] = useState(getRef);
  const [latestSen, setSen] = useState(getSen);
  const [latestInt, setInt] = useState(getInt);
  const [latestVis, setVis] = useState(getVis);
  const [latestVerb, setVerb] = useState(getVerb);
  const [latestSeq, setSeq] = useState(getSeq);
  const [latestGlob, setGlob] = useState(getGlob);

  function getAct() {
    if (styleArrlen > 0) {
      initialActive = learningStyleResults[styleArrlen - 1].active_score;
    } else {
      initialActive = 6;
    }
    return initialActive;
  }

  function getRef() {
    if (styleArrlen > 0) {
      initialRef = learningStyleResults[styleArrlen - 1].reflective_score;
    } else {
      initialRef = 5;
    }
    return initialRef;
  }

  function getSen() {
    if (styleArrlen > 0) {
      initialSen = learningStyleResults[styleArrlen - 1].sensing_score;
    } else {
      initialSen = 6;
    }
    return initialSen;
  }

  function getInt() {
    if (styleArrlen > 0) {
      initialInt = learningStyleResults[styleArrlen - 1].intuitive_score;
    } else {
      initialInt = 5;
    }
    return initialInt;
  }

  function getVis() {
    if (styleArrlen > 0) {
      initialVis = learningStyleResults[styleArrlen - 1].visual_score;
    } else {
      initialVis = 6;
    }
    return initialVis;
  }

  function getVerb() {
    if (styleArrlen > 0) {
      initialVerb = learningStyleResults[styleArrlen - 1].verbal_score;
    } else {
      initialVerb = 5;
    }
    return initialVerb;
  }

  function getSeq() {
    if (styleArrlen > 0) {
      initialSeq = learningStyleResults[styleArrlen - 1].sequential_score;
    } else {
      initialSeq = 6;
    }
    return initialSeq;
  }

  function getGlob() {
    if (styleArrlen > 0) {
      initialGlob = learningStyleResults[styleArrlen - 1].global_score;
    } else {
      initialGlob = 5;
    }
    return initialGlob;
  }

  const data_ar = {
    labels: ["Active", "Reflective"],
    datasets: [
      {
        data: [latestActive, latestRef],
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
        data: [latestSen, latestInt],
        backgroundColor: ["#009933", "#ffce56"],
        hoverBackgroundColor: ["#009933", "#ffce56"],
      },
    ],
  };

  const data_vv = {
    labels: ["Visual", "Verbal"],
    datasets: [
      {
        data: [latestVis, latestVerb],
        backgroundColor: ["#58508d", "#ffa600"],
        hoverBackgroundColor: ["#58508d", "#ffa600"],
      },
    ],
  };

  const data_sg = {
    labels: ["Sequential", "Global"],
    datasets: [
      {
        data: [latestSeq, latestGlob],
        backgroundColor: ["#cc00ff", "#003f5c"],
        hoverBackgroundColor: ["#cc00ff", "#003f5c"],
      },
    ],
  };

  function increaseActive() {
    if (latestActive < 11) {
      setActive(latestActive + 1);
      setRef(latestRef - 1);
    }
  }
  function increaseReflective() {
    if (latestRef < 11) {
      setActive(latestActive - 1);
      setRef(latestRef + 1);
    }
  }

  function increaseSensing() {
    if (latestSen < 11) {
      setSen(latestSen + 1);
      setInt(latestInt - 1);
    }
  }
  function increaseIntuitive() {
    if (latestInt < 11) {
      setSen(latestSen - 1);
      setInt(latestInt + 1);
    }
  }

  function increaseVisual() {
    if (latestVis < 11) {
      setVis(latestVis + 1);
      setVerb(latestVerb - 1);
    }
  }
  function increaseVerbal() {
    if (latestVerb < 11) {
      setVis(latestVis - 1);
      setVerb(latestVerb + 1);
    }
  }

  function increaseSequential() {
    if (latestSeq < 11) {
      setSeq(latestSeq + 1);
      setGlob(latestGlob - 1);
    }
  }
  function increaseGlobal() {
    if (latestGlob < 11) {
      setSeq(latestSeq - 1);
      setGlob(latestGlob + 1);
    }
  }

  function updatedLearningStyle() {
    const learningStyleSubmission = {
      af_a: latestActive,
      af_b: latestRef,
      si_a: latestSen,
      si_b: latestInt,
      vv_a: latestVis,
      vv_b: latestVerb,
      sg_a: latestSeq,
      sg_b: latestGlob,
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
        <div className="modal-pie-charts">
          <div>
            <button className="btn btn-primary btn-sm" onClick={increaseActive}>
              MoreActive
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={increaseReflective}
            >
              MoreRef
            </button>
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_ar} options={options} />
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={increaseSensing}
            >
              MoreSen
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={increaseIntuitive}
            >
              MoreInt
            </button>
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_si} options={options} />
          </div>{" "}
        </div>
        <div className="modal-pie-charts">
          <div>
            <button className="btn btn-primary btn-sm" onClick={increaseVisual}>
              MoreVis
            </button>
            <button className="btn btn-primary btn-sm" onClick={increaseVerbal}>
              MoreVerb
            </button>
            <RangeSlider
              value={latestVis}
              onChange={() => increaseVisual()}
              min={0}
              max={22}
            />
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_vv} options={options} />
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={increaseSequential}
            >
              MoreSeq
            </button>
            <button className="btn btn-primary btn-sm" onClick={increaseGlobal}>
              MoreGlob
            </button>
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_sg} options={options} />
          </div>{" "}
          <button
            className="btn btn-primary btn-sm"
            onClick={updatedLearningStyle}
          >
            Update Learning Style
          </button>
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
