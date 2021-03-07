import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

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

function QuizResultsModal({ open, onClose, quizResults }) {
  if (!open) return null;

  let results = Array(5).fill(0);

  if (quizResults.length > 0) {
    console.log("quizResults", quizResults);

    quizResults.forEach(function (entry) {
      if (entry.quiz_no === 1) {
        results[0] = entry.score;
      }
      if (entry.quiz_no === 2) {
        results[1] = entry.score;
      }
    });
  }

  const data = {
    type: "bar",
    labels: [
      "Data Types & Variables",
      "Conditional Statements",
      "Strings",
      "Advanced Data Types",
    ],
    datasets: [
      {
        data: [results[0], results[1], results[2], results[3]],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      position: "left",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            suggestedMin: 0,
            suggestedMax: 5,
          },
        },
      ],
    },
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
        <h2>Quiz Results</h2>
        <hr className="my-4"></hr>{" "}
        <div className="modal-bar-chart">
          <Bar data={data} options={options} height={100} />
        </div>
      </div>
    </>,
    document.getElementById("qrportal")
  );
}

export default QuizResultsModal;
