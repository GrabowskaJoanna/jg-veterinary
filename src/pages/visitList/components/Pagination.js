import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/list-slice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, limit, totalItems } = useSelector((state) => state.list);
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(<button key={i} onClick={() => handlePageChange(i)} />);
    }
    return pageNumbers;
  };

  return (
    <div className="visit_pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="icon-arrow-left" />
      </button>
      {renderPageNumbers()}
      <p>
        Strona <span>{currentPage}</span> z {totalPages}
      </p>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="icon-arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;
