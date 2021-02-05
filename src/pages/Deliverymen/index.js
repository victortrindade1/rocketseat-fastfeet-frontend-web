import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';

import api from '~/services/api';

import HeaderBody from '~/components/HeaderBody';
import Table from '~/components/Table';
import SearchInput from '~/components/Form/SearchInput';
import IconButton from '~/components/Button/IconButton';
import Pagination from '~/components/Pagination';

import DeliverymanItem from './DeliverymanItem';

import { Container, Content } from './styles';

function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [searchText, setSearchText] = useState('');

  // Trata dados da api
  const parseDeliverymen = data => {
    return data.map(deliveryman => {
      // 1- Máscara no id: "#" e mínimo de 2 dígitos
      deliveryman.stringId =
        deliveryman.id > 9 ? `#${deliveryman.id}` : `#0${deliveryman.id}`;

      return deliveryman;
    });
  };

  async function handlePagination(n) {
    const params = {
      page: n,
      q: searchText,
    };

    const response = await api.get('deliverymen', { params });
    const data = parseDeliverymen(response.data.items);
    setDeliverymen(data);
    setPage(response.data.page);
    setPages(response.data.pages);
  }

  async function handleSearch(e) {
    const search = e.target.value;

    /*
      * Este é um jeito de procurar usando JS q eu criei, mt melhor! Não consome
      * servidor. Eu simplesmente procurei no array do state.

      * String.includes(substring)  procura valor aproximado
      * Array.filter() retorna novo array de filtrados

    const [allDeliverymen, setAllDeliverymen] = useState([]);
    const foundDeliverymen = await allDeliverymen.filter(deliveryman =>
      deliveryman.name.includes(search)
    );
    */

    const response = await api.get('/deliverymen', {
      params: {
        q: search,
      },
    });
    const data = parseDeliverymen(response.data.items);

    setDeliverymen(data);
    setPage(response.data.page);
    setPages(response.data.pages);
    setSearchText(search);
  }

  // Carrega dados
  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen');

      const data = parseDeliverymen(response.data.items);
      setDeliverymen(data);
      setPages(response.data.pages);
      setPage(response.data.page);
    }

    loadDeliverymen();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderBody title="Gerenciando entregadores">
          <SearchInput
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por entregadores"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/deliverymen/new')}
            type="button"
          />
        </HeaderBody>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymen.map((deliveryman, index) => {
              return (
                <DeliverymanItem
                  key={deliveryman.id}
                  data={deliveryman}
                  index={index}
                  // onDelete={() => handleDelete(deliveryman)}
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

export default Deliverymen;
