import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../abstract/TopBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./components/VisitListHeader";
import Pagination from "./components/Pagination";
import VisitListBody from "./components/VisitListBody";
import { useDispatch, useSelector } from "react-redux";
import VisitActions from "../visitList/visitActions";
import NavTabs from "../../abstract/NavTabs";

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
        <TopBar />
        <div className="pagination_container">
          <Pagination />
        </div>
        <div className="visit_container">
          <NavTabs />
          <table className="visit_table">
            <VisitListHeader />
            <VisitListBody items={items} />
          </table>
        </div>
        <Footer />
      </>
    );
  } else {
    return null;
  }
};

export default VisitList;
