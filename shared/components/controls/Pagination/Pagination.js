import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.scss'


const Pagination = ({ intl, pagesCount, onClick, ...rest }) => (
  <ReactPaginate
    {...rest}
    previousClassName={styles.hiddenArrow}
    nextClassName={styles.hiddenArrow}
    breakLabel={<span className={styles.breakLabel}>...</span>}
    pageNum={pagesCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onClick}
    containerClassName={styles.pagination}
    activeClassName={styles.active}
  />
)

export default Pagination
