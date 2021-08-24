import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useDispatch } from 'react-redux';
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
            setFirstCurrentpage(firstCurrentpage => firstCurrentpage + 5)
            setLastCurrentPage(lastCurrentPage => lastCurrentPage + 5)
          } 
        }
      };
      const handlePaginateLeft = () => {
        if (currentPage > 1) {
          dispatch(paginateAction(currentPage - 1));
          if ((currentPage + 1) % 5 === 2) {
            setFirstCurrentpage(firstCurrentpage => firstCurrentpage - 5)
            setLastCurrentPage(lastCurrentPage => lastCurrentPage - 5)
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
        <FaChevronRight
          className={styles.ButtonNext}
          onClick={handlePaginateRight}
        />
      </div>
    )
}

export default Pagination;