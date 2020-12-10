import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import { Container, Div, Title, Text, Signature } from './styles';

function ShowDelivery({ recipient, start, finish }) {
  const dateStart = start && format(parseISO(start), 'dd/MM/yyyy');
  const dateFinish = finish && format(parseISO(finish), 'dd/MM/yyyy');

  return (
    <Container>
      <Div>
        <Title>Informações da encomenda</Title>
        <Text>
          {recipient.street}, {recipient.number}
        </Text>
        <Text>{recipient.complement}</Text>
        <Text>
          {recipient.city} - {recipient.state}
        </Text>
        <Text>{recipient.zipcode}</Text>
      </Div>
      <Div>
        <Title>Datas</Title>
        <Text>
          <strong>Retirada:</strong>
          {dateStart}
        </Text>
        <Text>
          <strong>Entrega:</strong>
          {dateFinish}
        </Text>
      </Div>
      <Div>
        <Title>Assinatura do destinatário</Title>
        <Signature />
      </Div>
    </Container>
  );
}

export default ShowDelivery;

ShowDelivery.propTypes = {
  recipient: PropTypes.shape({
    street: PropTypes.string.isRequired,
    number: PropTypes.string,
    complement: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  start: PropTypes.string,
  finish: PropTypes.string,
};

ShowDelivery.defaultProps = {
  start: '',
  finish: '',
};
