import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import history from '~/services/history';

import { Div } from './styles';

import PageTitle from './PageTitle';
import SearchInput from './SearchInput';

function HeaderBody({ title, placeholder, routeNew }) {
  return (
    <header>
      <PageTitle title={title} />
      <Div placeholder={placeholder}>
        {placeholder ? <SearchInput placeholder={placeholder} /> : null}

        <button type="button" onClick={() => history.push(routeNew)}>
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
  routeNew: PropTypes.string,
};

HeaderBody.defaultProps = {
  placeholder: '',
  routeNew: '',
};

export default HeaderBody;
