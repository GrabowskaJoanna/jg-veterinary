import React from "react";

const VisitListBody = ({ items }) => {
  return (
    <tbody className="visit_table_body">
      {items.map(
        ({
          id,
          chipNumber,
          visitPurpose,
          visitDate,
          species,
          status,
          name,
          surname,
        }) => (
          <tr key={id}>
            <td>{chipNumber}</td>
            <td>{visitPurpose}</td>
            <td>{new Date(visitDate).toLocaleDateString()}</td>
            <td>{species}</td>
            <td>{status.toLowerCase()}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>
              <i className="icon-close"></i>
            </td>
          </tr>
        ),
      )}
    </tbody>
  );
};

export default VisitListBody;
