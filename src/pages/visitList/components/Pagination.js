import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/listSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, limit, totalItems } = useSelector((state) => state.list);
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
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
