import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import HeaderBody from '~/components/HeaderBody';
import Pagination from '~/components/Pagination';
import Table from '~/components/Table';
import api from '~/services/api';

import ProblemItem from './ProblemItem';
import { Container, Content } from './styles';

function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  function parseProblems(data) {
    return data.map(problem => {
      problem.stringId = problem.id > 9 ? `#${problem.id}` : `#0${problem.id}`;

      return problem;
    });
  }

  async function handlePagination(n) {
    const params = {
      page: n,
    };

    const response = await api.get('', { params });

    console.tron.log(response);
  }

  const handleDelete = useCallback(
    async problem => {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(
        'Você tem certeza que deseja deletar isso?'
      );

      if (!confirm) {
        toast.error('Destinatário não apagado!');
        return;
      }

      try {
        await api.delete(`/problem/${problem.id}/cancel-delivery`);
        toast.success('Problema apagado com sucesso!');
        setProblems(problems.filter(({ id }) => id !== problem.id));
      } catch (err) {
        toast.error('Esse problema não pode ser deletado!');
      }
    },
    [problems]
  );

  // Load data
  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get('/delivery/all/problems');

        const data = parseProblems(response.data.items);
        setProblems(data);
        setPages(response.data.pages);
        setPage(response.data.page);
      } catch (error) {
        console.tron.log(error);
      }
    }

    loadProblems();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderBody title="Gerenciando problemas" />
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => {
              return (
                <ProblemItem
                  key={problem.id}
                  data={problem}
                  onDelete={() => handleDelete(problem)}
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

export default Problems;
