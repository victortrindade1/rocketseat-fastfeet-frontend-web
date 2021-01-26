import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
