import React from 'react';

import { Container } from './styles';

import HeaderBody from '~/components/HeaderBody';

function Deliverymen() {
  return (
    <Container>
      <HeaderBody
        title="Gerenciando entregadores"
        placeholder="Buscar por entregadores"
      />
    </Container>
  );
}

export default Deliverymen;
