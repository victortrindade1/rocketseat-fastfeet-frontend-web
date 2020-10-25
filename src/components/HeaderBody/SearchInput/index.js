import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Form, SearchIcon, Input } from './styles';

function SearchInput({ placeholder }) {
  return (
    <Form>
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
      <Input type="text" name="search" placeholder={placeholder} />
    </Form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
