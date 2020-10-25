import React from 'react';

import { Container } from './styles';

import HeaderBody from '~/components/HeaderBody';
import Table from '~/components/Table';

function Deliveries() {
  return (
    <Container>
      <HeaderBody
        title="Gerenciando encomendas"
        placeholder="Buscar por encomendas"
      />

      <Table />
    </Container>
  );
}

export default Deliveries;
