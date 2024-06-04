import React from "react";

const VisitListHeader = () => {
  return (
    <thead className="visit-table-header">
      <tr>
        <th>Nr chipa</th>
        <th>Cel wizyty</th>
        <th>Data wizyty</th>
        <th>Gatunek</th>
        <th>Status</th>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default VisitListHeader;
