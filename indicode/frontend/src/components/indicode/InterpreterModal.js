import React, { Fragment } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "85vh",
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

function InterpreterModal({ open, onClose }) {
  if (!open) return null;

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
        <h2>Code</h2>
        <hr className="int-hr"></hr>{" "}
        <p>Utilise Trinket's Interpeter to practice your coding skills!</p>
        <div>
          <iframe
            className="portal-interpreter"
            src="https://trinket.io/embed/python/3d8d7ce66b"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>,
    document.getElementById("intportal")
  );
}

export default InterpreterModal;
