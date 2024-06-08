import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./components/VisitListHeader";
import Pagination from "./components/Pagination";
import VisitListBody from "./components/VisitListBody";
import { useSelector } from "react-redux";

const VisitList = () => {
  const items = useSelector((state) => state.list.items);
  const token = useSelector((state) => state.session.token);
  const form = useSelector((state) => state.form);
  form.telephone_number;

  console.log("hey crazy developer this is your token: ", token);

  return (
    <>
      <NavBar />
      <div className="visit-container">
        <h1 className="visit-header">Terminarz</h1>
        <Pagination />
      </div>
      <table className="visit-table">
        <VisitListHeader />
        <VisitListBody items={items} />
      </table>
      <Footer />
    </>
  );
};

export default VisitList;
