import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';

import HeaderBody from '~/components/HeaderBody';
import Table from '~/components/Table';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  function verifyStatus(delivery) {
    if (delivery.canceled_at) {
      delivery.status = {
        color: '#fab0b0',
        text: 'CANCELADO',
      };
    } else if (delivery.end_date) {
      delivery.status = {
        color: '#dff0df',
        text: 'ENTREGUE',
      };
    } else if (delivery.start_date) {
      delivery.status = {
        color: '#bad2ff',
        text: 'RETIRADA',
      };
    } else {
      delivery.status = {
        color: '#f0f0df',
        text: 'PENDENTE',
      };
    }

    return delivery.status;
  }

  // Modificações no state deliveries
  const parseDeliveries = useCallback(data => {
    return data.map(delivery => {
      // 1- Máscara no id: "#" e mínimo de 2 dígitos
      delivery.stringId =
        delivery.id > 9 ? `#${delivery.id}` : `#0${delivery.id}`;

      // 2- Status de entrega
      delivery.status = verifyStatus(delivery);

      return delivery;
    });
  }, []);

  // Carrega dados no state deliveries ao renderizar
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');
      const data = parseDeliveries(response.data);
      setDeliveries(data);
    }

    loadDeliveries();
  }, [parseDeliveries]);

  return (
    <Container>
      <HeaderBody
        title="Gerenciando encomendas"
        placeholder="Buscar por encomendas"
        routeNew="/deliveries/new"
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
          {deliveries.map((delivery, index) => {
            return (
              <DeliveryItem key={delivery.id} data={delivery} index={index} />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Deliveries;
