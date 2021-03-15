import React from "react";

const Pagination = ({
  lessonsPerPage,
  totalLessons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLessons / lessonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="learning-pag-footer">
      <ul className="pagination l-pag-icons">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <a
            className="page-link learning-nav-link"
            onClick={() => paginate(currentPage - 1)}
          >
            &laquo;
          </a>
        </li>

        <li
          className={
            currentPage === totalLessons ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link learning-nav-link"
            onClick={() => paginate(currentPage + 1)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
