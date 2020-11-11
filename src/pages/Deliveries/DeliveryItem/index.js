import React from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import Avatar from '~/components/Avatar';
import ActionsMenu from '~/components/ActionsMenu';

import {
  DeliverymanContainer,
  DeliverymanName,
  StatusDelivery,
} from './styles';

function DeliveryItem({ data, index }) {
  return (
    <tr>
      {console.tron.log(data)}
      <td>{data.stringId}</td>
      <td>{data.recipient.name}</td>
      <td>
        <DeliverymanContainer>
          <Avatar
            url={data.deliveryman.avatar ? data.deliveryman.avatar.url : ''}
            name={data.deliveryman.name}
            index={index}
          />
          <DeliverymanName>
            <span>{data.deliveryman.name}</span>
          </DeliverymanName>
        </DeliverymanContainer>
      </td>
      <td>{data.recipient.city}</td>
      <td>{data.recipient.state}</td>
      <td>
        <StatusDelivery color={data.status.color}>
          {data.status.text}
        </StatusDelivery>
      </td>
      <td>
        <ActionsMenu>
          <button type="button">
            <MdRemoveRedEye size={24} color="#8E5BE8" />
            Visualizar
          </button>
          <button type="button">
            <MdEdit size={24} color="#4D85EE" />
            Editar
          </button>
          <button type="button">
            <MdDeleteForever size={24} color="#DE3B3B" />
            Excluir
          </button>
        </ActionsMenu>
      </td>
    </tr>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    stringId: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    deliveryman: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    status: PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DeliveryItem;
