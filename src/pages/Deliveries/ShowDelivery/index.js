import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import { Container, Div, Title, Text, Signature, Scroll } from './styles';

function ShowDelivery({ recipient, start, finish, signature }) {
  const dateStart = start && format(parseISO(start), 'dd/MM/yyyy');
  const dateFinish = finish && format(parseISO(finish), 'dd/MM/yyyy');

  return (
    <Container>
      <Scroll>
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
        {dateStart && (
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
        )}

        {signature && (
          <Div>
            <Title>Assinatura do destinatário</Title>

            <Signature url={signature} />
          </Div>
        )}
      </Scroll>
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
  signature: PropTypes.shape({
    url: PropTypes.string,
  }),
};

ShowDelivery.defaultProps = {
  start: '',
  finish: '',
  signature: '',
};
