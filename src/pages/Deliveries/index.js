import React, { useState, useEffect, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import IconButton from '~/components/Button/IconButton';
import SearchInput from '~/components/Form/SearchInput';
import HeaderBody from '~/components/HeaderBody';
import Pagination from '~/components/Pagination';
import Table from '~/components/Table';
import api from '~/services/api';
import history from '~/services/history';

import DeliveryItem from './DeliveryItem';
import { Container, Content } from './styles';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [searchText, setSearchText] = useState('');
  console.tron.log(deliveries);
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

  async function handleSearch(e) {
    const search = e.target.value;
    const response = await api.get('/deliveries', {
      params: {
        q: search,
      },
    });
    const data = parseDeliveries(response.data.items);
    setDeliveries(data);
    setPage(response.data.page);
    setPages(response.data.pages);
    setSearchText(search);
  }

  const handleDelete = useCallback(
    async delivery => {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(
        'Você tem certeza que deseja deletar isso?'
      );

      if (!confirm) {
        toast.error('Encomenda não apagada!');
        return;
      }

      try {
        await api.delete(`/deliveries/${delivery.id}`);
        toast.success('Encomenda apagada com sucesso!');
        setDeliveries(deliveries.filter(({ id }) => id !== delivery.id));
      } catch (err) {
        toast.error('Essa encomenda não pode ser deletada!');
      }
    },
    [deliveries]
  );

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
      <Content>
        <HeaderBody title="Gerenciando encomendas">
          <SearchInput
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por encomendas"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/deliveries/new')}
            type="button"
          />
        </HeaderBody>
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
                <DeliveryItem
                  key={delivery.id}
                  data={delivery}
                  index={index}
                  onDelete={() => handleDelete(delivery)}
                />
              );
            })}
          </tbody>
        </Table>
        <Pagination page={page} pages={pages} callback={handlePagination} />
      </Content>
    </Container>
  );
}

export default Deliveries;
