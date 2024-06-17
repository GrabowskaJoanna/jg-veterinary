import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/modalSlice";
import { useNavigate, useParams } from "react-router-dom";

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
        <tr
          key={item.id}
          onClick={() => editItem(item.id)}
          className={item.status === "URGENT" ? "urgent" : ""}
        >
          <td className="chip-number">{item.chipNumber}</td>
          <td className="visit-purpose">{item.visitPurpose}</td>
          <td className="visit-date">
            {new Date(item.visitDate).toLocaleDateString()}
          </td>
          <td className="species">{item.species}</td>
          <td className="status">{item.status.toLowerCase()}</td>
          <td className="name">{item.name}</td>
          <td className="surname">{item.surname}</td>
          <td className="actions">
            <i onClick={() => handleShowModal(item)} className="icon-close"></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VisitListBody;
