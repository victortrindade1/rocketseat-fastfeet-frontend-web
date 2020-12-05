import React, { useState, useEffect, useCallback } from 'react';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import HeaderBody from '~/components/HeaderBody';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

// import { Container, Pagination } from './styles';
import { Container } from './styles';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [searchText, setSearchText] = useState('');

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

  // Seta a page. O argumento n é o state page modificado no callback de Pagination
  async function handlePagination(n) {
    const params = {
      page: n,
      q: searchText,
    };

    const response = await api.get('deliveries', { params });
    const data = parseDeliveries(response.data.items);
    setDeliveries(data);
    setPage(response.data.page);
    setPages(response.data.pages);
  }

  async function handleSearch(search) {
    // search vem do callback de SearchInput
    const response = await api.get(`deliveries?q=${search}`);
    const data = parseDeliveries(response.data.items);
    setDeliveries(data);
    setPage(response.data.page);
    setPages(response.data.pages);
    setSearchText(search);
  }

  // Carrega dados no state deliveries ao renderizar
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      // Incrementa máscara no id e adiciona status
      const data = parseDeliveries(response.data.items);
      setDeliveries(data);

      // Total de páginas (para bloquear botão "próximo" da última page)
      setPages(response.data.pages);
      setPage(response.data.page);
    }

    loadDeliveries();
  }, [parseDeliveries]);

  return (
    <Container>
      <HeaderBody
        title="Gerenciando encomendas"
        placeholder="Buscar por encomendas"
        routeNew="/deliveries/new"
        callback={handleSearch}
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
      <Pagination page={page} pages={pages} callback={handlePagination} />
    </Container>
  );
}

export default Deliveries;
