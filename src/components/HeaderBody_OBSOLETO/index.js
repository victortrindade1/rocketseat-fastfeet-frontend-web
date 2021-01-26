import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import history from '~/services/history';

import { Div } from './styles';

import PageTitle from './PageTitle';
import SearchInput from './SearchInput';

function HeaderBody({
  title,
  placeholder,
  routeNew,
  callback,
  searchFieldName,
}) {
  console.tron.log(placeholder, searchFieldName);
  return (
    <header>
      <PageTitle title={title} />
      <Div placeholder={placeholder}>
        {/* Se não tiver placeholder, não mostra SearchInput (page Problems) */}
        {/* {placeholder ? (
          <SearchInput
            name={searchFieldName}
            callback={callback}
            placeholder={placeholder}
          />
        ) : null} */}

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
  callback: PropTypes.func.isRequired,
  searchFieldName: PropTypes.string,
};

HeaderBody.defaultProps = {
  placeholder: '',
  routeNew: '',
  searchFieldName: '',
};

export default HeaderBody;
