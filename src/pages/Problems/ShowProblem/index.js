import React from 'react';

import PropTypes from 'prop-types';

import { Container, Scroll, Title, Text } from './styles';

function ShowProblem({ description }) {
  return (
    <Container>
      <Scroll>
        <Title>VISUALIZAR PROBLEMA</Title>
        <Text>{description}</Text>
      </Scroll>
    </Container>
  );
}

ShowProblem.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ShowProblem;
