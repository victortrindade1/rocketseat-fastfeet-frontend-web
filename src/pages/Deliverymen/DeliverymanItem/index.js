import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import Avatar from '~/components/Avatar';
import history from '~/services/history';

function DeliverymanItem({ data, index, onDelete }) {
  const handleEdit = () => {
    // id da encomenda
    history.push(`/deliverymen/edit/${data.id}`);
  };

  return (
    <>
      <tr>
        <td>{data.stringId}</td>
        <td>
          <Avatar
            url={data.avatar ? data.avatar.url : null}
            name={data.name}
            index={index}
          />
        </td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
          <ActionsMenu>
            <button type="button" onClick={handleEdit}>
              <MdEdit size={24} color="#4D85EE" />
              Editar
            </button>
            <button type="button" onClick={onDelete}>
              <MdDeleteForever size={24} color="#DE3B3B" />
              Excluir
            </button>
          </ActionsMenu>
        </td>
      </tr>
    </>
  );
}

DeliverymanItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    stringId: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  index: PropTypes.number.isRequired,
};

export default DeliverymanItem;
