import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./components/VisitListHeader";
import Pagination from "./components/Pagination";
import VisitListBody from "./components/VisitListBody";
import { useDispatch, useSelector } from "react-redux";
import VisitActions from "../visitList/visitActions";

const VisitList = () => {
  const items = useSelector((state) => state.list.items);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      dispatch(VisitActions.fetchVisits());
    }
  }, [token, navigate, dispatch]);

  if (token) {
    return (
      <>
        <NavBar />
        <div className="visit_container">
          <h1 className="visit_header">Terminarz</h1>
          <Pagination />
        </div>
        <table className="visit_table">
          <VisitListHeader />
          <VisitListBody items={items} />
        </table>
        <Footer />
      </>
    );
  } else {
    return null;
  }
};

export default VisitList;
