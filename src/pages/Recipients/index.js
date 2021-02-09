import React, { useEffect, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderBody from '~/components/HeaderBody';
import Pagination from '~/components/Pagination';
import Table from '~/components/Table';
import api from '~/services/api';
import history from '~/services/history';

import RecipientItem from './RecipientItem';
import { Container, Content } from './styles';

function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [searchText, setSearchText] = useState('');

  function parseRecipients(data) {
    return data.map(recipient => {
      recipient.stringId =
        recipient.id > 9 ? `#${recipient.id}` : `#0${recipient.id}`;

      recipient.address = `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`;

      return recipient;
    });
  }

  async function handleSearch(e) {
    const search = e.target.value;

    const params = {
      q: search,
    };

    const response = await api.get('recipients', { params });

    const data = parseRecipients(response.data.items);

    setRecipients(data);
    setPage(response.data.page);
    setPages(response.data.pages);
    setSearchText(search);
  }

  async function handlePagination(n) {
    const params = {
      page: n,
      q: searchText,
    };

    const response = await api.get('recipients', { params });
    const data = parseRecipients(response.data.items);
    setRecipients(data);
    setPage(response.data.page);
    setPages(response.data.pages);
  }

  const handleDelete = useCallback(
    async recipient => {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(
        'Você tem certeza que deseja deletar isso?'
      );

      if (!confirm) {
        toast.error('Destinatário não apagado!');
        return;
      }

      try {
        await api.delete(`/recipients/${recipient.id}`);
        toast.success('Entregador apagado com sucesso!');
        setRecipients(recipients.filter(({ id }) => id !== recipient.id));
      } catch (err) {
        toast.error('Esse destinatário não pode ser deletado!');
      }
    },
    [recipients]
  );

  // Carrega dados
  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const data = parseRecipients(response.data.items);
      setRecipients(data);
      setPages(response.data.pages);
      setPage(response.data.page);
    }

    loadRecipients();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderBody title="Gerenciando destinatários">
          <SearchInput
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por destinatários"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/recipients/new')}
            type="button"
          />
        </HeaderBody>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => {
              return (
                <RecipientItem
                  key={recipient.id}
                  data={recipient}
                  onDelete={() => handleDelete(recipient)}
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

export default Recipients;
