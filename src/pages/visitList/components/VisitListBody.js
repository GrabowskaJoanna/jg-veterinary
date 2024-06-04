import React from "react";
import visits from "../visits";

const VisitListBody = () => {
  return (
    <tbody className="visit-table-body">
      {visits.map(
        ({
          id,
          chip_number,
          visit_purpose,
          visit_date,
          species,
          status,
          name,
          surname,
        }) => (
          <tr key={id}>
            <td>{chip_number}</td>
            <td>{visit_purpose}</td>
            <td>{visit_date}</td>
            <td>{species}</td>
            <td>{status}</td>
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
