import React from "react";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../store/modalSlice";
import { deleteItem } from "../../store/listSlice";

const VisitListBody = ({ items }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleIconClick = (item) => {
    dispatch(showModal(item));
  };

  return (
    <tbody className="visit_table_body">
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.chipNumber}</td>
          <td>{item.visitPurpose}</td>
          <td>{new Date(item.visitDate).toLocaleDateString()}</td>
          <td>{item.species}</td>
          <td>{item.status.toLowerCase()}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>
            <i onClick={() => handleIconClick(item)} className="icon-close"></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VisitListBody;
