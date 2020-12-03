import React, { useState, useEffect, useCallback } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Pagination } from './styles';

import HeaderBody from '~/components/HeaderBody';
import Table from '~/components/Table';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  // seta delivery.status
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

  async function handlePagination(action) {
    if (action === 'back') {
      await setPage(page - 1);
    } else {
      await setPage(page + 1);
    }
  }

  // Carrega dados no state deliveries ao renderizar
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: {
          page,
        },
      });

      // Incrementa máscara no id e adiciona status
      const data = parseDeliveries(response.data.items);
      setDeliveries(data);

      // Total de páginas (para bloquear botão "próximo" da última page)
      setPages(response.data.pages);
    }

    loadDeliveries();
  }, [page, parseDeliveries]);

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
      <Pagination>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePagination('back')}
        >
          <MdKeyboardArrowLeft size={50} />
        </button>
        <span>{page}</span>
        <button
          type="button"
          disabled={page >= pages}
          onClick={() => handlePagination('next')}
        >
          <MdKeyboardArrowRight size={50} />
        </button>
      </Pagination>
    </Container>
  );
}

export default Deliveries;
