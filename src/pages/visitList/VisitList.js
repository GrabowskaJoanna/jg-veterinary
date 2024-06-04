import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./components/VisitListHeader";
import Pagination from "./components/Pagination";
import VisitListBody from "./components/VisitListBody";

const VisitList = () => {
  return (
    <>
      <NavBar />
      <div className="visit-container">
        <h1 className="visit-header">Terminarz</h1>
        <Pagination />
      </div>
      <table className="visit-table">
        <VisitListHeader />
        <VisitListBody />
      </table>
      <Footer />
    </>
  );
};

export default VisitList;
