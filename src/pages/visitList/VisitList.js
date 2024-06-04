import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./VisitListHeader";
import visits from "./visits";

const VisitList = () => {
  return (
    <>
      <NavBar />
      <h1 className="visit-header">Terminarz</h1>
      <div></div>
      <table className="visit-table">
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
      </table>
      <Footer />
    </>
  );
};

export default VisitList;
