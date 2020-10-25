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
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>ENTREGUE</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Wolfgang Amadeus</td>
            <td>Gaspar Antunes</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>PENDENTE</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Deliveries;
