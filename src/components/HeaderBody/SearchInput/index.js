import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';
import * as Yup from 'yup';

import { Form, SearchIcon, Input } from './styles';

const schema = Yup.object().shape({
  search: Yup.string(),
});

function SearchInput({ placeholder = '', callback }) {
  const [searching, setSearching] = useState(false);

  async function handleSubmit({ search }) {
    setSearching(true);

    await callback(search);

    setSearching(false);
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <SearchIcon searching={searching ? searching.toString() : undefined}>
        {searching ? <AiOutlineLoading /> : <MdSearch />}
      </SearchIcon>
      <Input type="text" name="search" placeholder={placeholder} />
    </Form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default SearchInput;
