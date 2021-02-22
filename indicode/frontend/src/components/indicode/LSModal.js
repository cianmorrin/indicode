import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

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

function LSModal({ open, children, onClose, learningStyleResults }) {
  if (!open) return null;

  const data_ar = {
    labels: ["Active", "Reflective"],
    datasets: [
      {
        data: [
          learningStyleResults[0].active_score,
          learningStyleResults[0].reflective_score,
        ],
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
        data: [
          learningStyleResults[0].sensing_score,
          learningStyleResults[0].intuitive_score,
        ],
        backgroundColor: ["#009933", "#ffce56"],
        hoverBackgroundColor: ["#009933", "#ffce56"],
      },
    ],
  };

  const data_vv = {
    labels: ["Visual", "Verbal"],
    datasets: [
      {
        data: [
          learningStyleResults[0].visual_score,
          learningStyleResults[0].verbal_score,
        ],
        backgroundColor: ["#58508d", "#ffa600"],
        hoverBackgroundColor: ["#58508d", "#ffa600"],
      },
    ],
  };

  const data_sg = {
    labels: ["Sequential", "Global"],
    datasets: [
      {
        data: [
          learningStyleResults[0].sequential_score,
          learningStyleResults[0].global_score,
        ],
        backgroundColor: ["#cc00ff", "#003f5c"],
        hoverBackgroundColor: ["#cc00ff", "#003f5c"],
      },
    ],
  };

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
          <div className="d-chart">
            {" "}
            <Doughnut data={data_ar} options={options} />
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_si} options={options} />
          </div>{" "}
        </div>
        <div className="modal-pie-charts">
          <div className="d-chart">
            {" "}
            <Doughnut data={data_vv} options={options} />
          </div>
          <div className="d-chart">
            {" "}
            <Doughnut data={data_sg} options={options} />
          </div>{" "}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

const mapStateToProps = (state) => ({
  learningStyleResults: state.style.learningStyleResults,
});

export default connect(mapStateToProps, null)(LSModal);
