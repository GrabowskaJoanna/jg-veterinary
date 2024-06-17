import React from "react";

const VisitListHeader = () => {
  return (
    <thead className="visit_table_header">
      <tr>
        <th className="chip-number">Nr chipa</th>
        <th className="visit-purpose">Cel wizyty</th>
        <th className="visit-date">Data wizyty</th>
        <th className="species">Gatunek</th>
        <th className="status">Status</th>
        <th className="name">Imię</th>
        <th className="surname">Nazwisko</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default VisitListHeader;
