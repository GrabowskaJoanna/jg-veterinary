import React from "react";
import { deleteRow, hideModal } from "../pages/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../pages/store/listSlice";

const Modal = ({ show }) => {
  const dispatch = useDispatch();
  const row = useSelector((state) => state.modal.row);
  const token = localStorage.getItem("token");

  const handleDelete = (itemId) => {
    const data = {
      success: true,
    };

    fetch(`http://localhost:7080/api/visits/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(deleteItem(itemId));
          dispatch(hideModal());
        } else {
          console.error("Błąd usuwania wizyty");
        }
      })
      .catch((error) => {
        console.error("Błąd sieci:", error);
      });
  };

  if (!show || !row) {
    return null;
  }
  return (
    <div className="modal_background">
      <div className="modal_container">
        <h1 className="modal_container_header">Potwierdź usuwanie</h1>
        {row && (
          <p className="modal_container_text">
            Czy na pewno chcesz usunąć wizytę <span>{row.visitPurpose} </span>
            dla pacjenta o numerze chip <span>{row.chipNumber}</span> z dnia
            <span> {new Date(row.visitDate).toLocaleDateString()}</span>
          </p>
        )}
        <div className="modal_container_buttons">
          <button
            className="secondary_button btn"
            onClick={() => dispatch(hideModal())}
          >
            Nie
          </button>
          <button
            className="primary_button btn"
            onClick={() => handleDelete(row.id)}
          >
            Tak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
