import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/listSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.list.currentPage);
  const limit = useSelector((state) => state.list.limit);
  const totalItems = useSelector((state) => state.list.totalItems);
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };

  return (
    <div className="visit_pagination">
      <button
        className="visit_pagination_button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="icon-arrow-left visit_pagination_icon" />
      </button>
      <p>
        Strona <span>{currentPage}</span> z {totalPages}
      </p>
      <button
        className="visit_pagination_button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="icon-arrow-right visit_pagination_icon" />
      </button>
    </div>
  );
};

export default Pagination;
