import React from "react";

const Modal = ({ show, setIsVisible }) => {
  if (!show) return null;
  return (
    <div className="modal_background">
      <div className="modal_container">
        <h1 className="modal_container_header">Modal header</h1>
        <p className="modal_container_text">
          Czy na pewno chcesz usunąć wizytę “RTG łapy”, dla pacjenta o numerze
          chipu: 651322252 z dnia 02/07/2024r.?
        </p>
        <div className="modal_container_buttons">
          <button
            className="secondary_button btn"
            onClick={() => setIsVisible(false)}
          >
            Nie
          </button>
          <button className="primary_button btn">Tak</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
