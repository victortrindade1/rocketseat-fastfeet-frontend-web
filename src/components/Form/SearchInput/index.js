import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

function SearchInput({ ...rest }) {
  // TODO: Fazer um loading
  return (
    <Container>
      <MdSearch color="#999" size={16} />
      <input type="text" {...rest} />
    </Container>
  );
}

export default SearchInput;
