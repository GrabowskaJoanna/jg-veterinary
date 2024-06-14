import listSlice, { setItems } from "../store/listSlice";

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
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    }
  };
}

export default new VisitActions();
