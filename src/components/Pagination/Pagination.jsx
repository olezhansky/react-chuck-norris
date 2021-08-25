import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';
import { paginateAction } from '../../store/jokes/actions';

const Pagination = ({jokesPerPage, totalJokes, currentPage}) => {
    const dispatch = useDispatch();

    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
        pageNumbers.push(i);
    }
    const handlePaginate = (pageNumber) => {
        dispatch(paginateAction(pageNumber));
    };

    const [firstCurrentpage, setFirstCurrentpage] = useState(0);
    const [lastCurrentPage, setLastCurrentPage] = useState(5);

    const handlePaginateRight = () => {
        if (currentPage <= pageNumbers.length - 1) {
          dispatch(paginateAction(currentPage + 1));
          if (currentPage % 5 === 0) {
            setFirstCurrentpage((prevState) => prevState + 5);
            setLastCurrentPage((prevState) => prevState + 5);
          }
        }
      };
      const handlePaginateLeft = () => {
        if (currentPage > 1) {
          dispatch(paginateAction(currentPage - 1));
          if ((currentPage + 1) % 5 === 2) {
            setFirstCurrentpage((prevState) => prevState - 5);
            setLastCurrentPage((prevState) => prevState - 5);
          }
        }
      };

    return (
      <div className={styles.Pagination}>
        <FaChevronLeft
          className={styles.ButtonPrev}
          onClick={handlePaginateLeft}
        />
        {pageNumbers.slice(firstCurrentpage, lastCurrentPage).map((pageNumber) => (
          <div
            role="presentation"
            className={classNames({
            [styles.PaginationItem]: true,
            [styles.PaginationItem_active]: currentPage === pageNumber,
          })}
            key={pageNumber}
            onClick={() => handlePaginate(pageNumber)}
          >
            {pageNumber}
          </div>
      ))}
        {pageNumbers.length > 5 && pageNumbers.length - currentPage < pageNumbers.length % 5
          && pageNumbers.length % 5 > 0
          ? null
          : <span className={styles.PaginationPints}>. . .</span>}
      &nbsp;
      &nbsp;
        {pageNumbers.length - currentPage < pageNumbers.length % 5 && pageNumbers.length % 5 > 0
        ? null
        : <span className={styles.PaginationLastPage}>{pageNumbers.length}</span>}
        <FaChevronRight
          className={styles.ButtonNext}
          onClick={handlePaginateRight}
        />
      </div>
    );
};

Pagination.propTypes = {
    jokesPerPage: PropTypes.number,
    totalJokes: PropTypes.number,
    currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  jokesPerPage: 1,
  totalJokes: 1,
  currentPage: 1,
};

export default Pagination;