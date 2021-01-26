import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function HeaderBody({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>

      {children && <Content>{children}</Content>}
    </Container>
  );
}

HeaderBody.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

HeaderBody.defaultProps = {
  children: null,
};
