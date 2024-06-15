import { setItems, setPage, setTotalItems } from "../store/listSlice";
import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export class VisitActions {
  fetchVisits = () => async (dispatch, getState) => {
    const state = getState();
    const currentPage = state.list.currentPage;
    const limit = state.list.limit;
    const token = sessionStorage.getItem("token");
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
      dispatch(setTotalItems(data.total));
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    }
  };
}
export default new VisitActions();
