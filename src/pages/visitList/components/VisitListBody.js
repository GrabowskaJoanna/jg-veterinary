import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modalSlice";
import { useNavigate } from "react-router-dom";

const StatusLabels = {
  URGENT: "Pilne",
  STABLE: "Stabilne",
};

const VisitListBody = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowModal = (item) => {
    dispatch(showModal(item));
  };

  const editItem = (itemId) => {
    navigate(`/registration/${itemId}`);
  };

  return (
    <tbody className="visit_table_body">
      {items.map((item) => (
        <tr key={item.id} className={item.status === "URGENT" ? "urgent" : ""}>
          <td className="chip-number">{item.chipNumber}</td>
          <td className="visit-purpose">{item.visitPurpose}</td>
          <td className="visit-date">
            {new Date(item.visitDate).toLocaleDateString()}
          </td>
          <td className="species">{item.species}</td>
          <td className="status">{StatusLabels[item.status]}</td>
          <td className="name">{item.name}</td>
          <td className="surname">{item.surname}</td>
          <td className="actions">
            <img
              src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Pen-4-icon.png"
              width="20"
              height="20"
              alt="pen"
              onClick={() => editItem(item.id)}
            />
            <i onClick={() => handleShowModal(item)} className="icon-close"></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VisitListBody;
