import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderBody from '~/components/HeaderBody';
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

  const handleSearch = () => {};

  function parseRecipients(data) {
    return data.map(recipient => {
      recipient.stringId =
        recipient.id > 9 ? `#${recipient.id}` : `#0${recipient.id}`;

      return recipient;
    });
  }

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
            {recipients.map((recipient, index) => {
              return (
                <RecipientItem
                  key={recipient.id}
                  data={recipient}
                  index={index}
                  onDelete={() => {}}
                />
              );
            })}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default Recipients;
