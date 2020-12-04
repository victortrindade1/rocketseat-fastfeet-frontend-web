import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

function Pagination({ page = 1, pages = 1, callback }) {
  function handlePrevPage() {
    callback(page - 1);
  }

  function handleNextPage() {
    callback(page + 1);
  }

  return (
    <Container>
      <button type="button" disabled={page < 2} onClick={handlePrevPage}>
        <MdKeyboardArrowLeft size={40} />
      </button>
      <span>{page}</span>
      <button type="button" disabled={page >= pages} onClick={handleNextPage}>
        <MdKeyboardArrowRight size={40} />
      </button>
    </Container>
  );
}

export default Pagination;

Pagination.defaultProps = {
  page: 1,
  pages: 1,
};

Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  callback: PropTypes.func.isRequired,
};
