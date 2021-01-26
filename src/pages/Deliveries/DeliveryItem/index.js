import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import history from '~/services/history';

import Avatar from '~/components/Avatar';
import ActionsMenu from '~/components/ActionsMenu';
import SimpleModal from '~/components/SimpleModal';

import ShowDelivery from '~/pages/Deliveries/ShowDelivery';

import {
  DeliverymanContainer,
  DeliverymanName,
  StatusDelivery,
} from './styles';

function DeliveryItem({ data, index }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEdit = () => {
    // id da encomenda
    history.push(`/deliveries/edit/${data.id}`);
  };

  return (
    <>
      <tr>
        <td>{data.stringId}</td>
        <td>{data.recipient.name}</td>
        <td>
          <DeliverymanContainer>
            <Avatar
              url={data.deliveryman.avatar ? data.deliveryman.avatar.url : null}
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
            <button type="button" onClick={handleOpenModal}>
              <MdRemoveRedEye size={24} color="#8E5BE8" />
              Visualizar
            </button>
            <button type="button" onClick={handleEdit}>
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
      <SimpleModal open={openModal} handleClose={handleCloseModal}>
        <ShowDelivery
          recipient={data.recipient}
          start={data.start_date}
          finish={data.end_date}
          signature={data.signature ? data.signature.url : null}
        />
      </SimpleModal>
    </>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    signature: PropTypes.object,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DeliveryItem;
