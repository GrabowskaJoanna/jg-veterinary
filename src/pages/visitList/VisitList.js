import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import VisitListHeader from "./components/VisitListHeader";
import Pagination from "./components/Pagination";
import VisitListBody from "./components/VisitListBody";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../store/list-slice";

const VisitList = () => {
  const items = useSelector((state) => state.list.items);
  const token = localStorage.getItem("token");
  const currentPage = useSelector((state) => state.list.currentPage);
  const limit = useSelector((state) => state.list.limit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:7080/api/visits?pageNumber=${currentPage}&pageSize=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + token,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setItems(data.items));
      console.log(data.items);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    fetchData();
  }, [token, currentPage, limit]);

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
};

export default VisitList;
