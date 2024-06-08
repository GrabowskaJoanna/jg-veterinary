import React from "react";

const VisitListBody = ({ items }) => {
  return (
    <tbody className="visit-table-body">
      {items.map(
        ({
          id,
          chip,
          visit_purpose,
          visit_date,
          species,
          visit_status,
          owner_name,
          owner_surname,
        }) => (
          <tr key={id}>
            <td>{chip}</td>
            <td>{visit_purpose}</td>
            <td>{visit_date}</td>
            <td>{species}</td>
            <td>{visit_status}</td>
            <td>{owner_name}</td>
            <td>{owner_surname}</td>
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
