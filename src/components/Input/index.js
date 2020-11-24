import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input as UnInput } from './styles';

function Input({ title, ...rest }) {
  return (
    <Container>
      <strong>{title}</strong>
      <UnInput {...rest} />
    </Container>
  );
}

export default Input;

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
