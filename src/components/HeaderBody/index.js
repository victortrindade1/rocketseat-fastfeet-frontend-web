import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import { Div } from './styles';

import PageTitle from './PageTitle';
import SearchInput from './SearchInput';

function HeaderBody({ title, placeholder }) {
  return (
    <header>
      <PageTitle title={title} />
      <Div placeholder={placeholder}>
        {placeholder ? <SearchInput placeholder={placeholder} /> : null}

        <button type="button">
          <MdAdd />
          CADASTRAR
        </button>
      </Div>
    </header>
  );
}

HeaderBody.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

HeaderBody.defaultProps = {
  placeholder: '',
};

export default HeaderBody;
