import { setItems } from "../store/listSlice";

export class VisitActions {
  fetchVisits = (currentPage, limit) => async (dispatch) => {
    console.log(1);
    const token = localStorage.getItem("token");
    try {
      console.log(2);
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
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    }
  };
}

export default new VisitActions();
