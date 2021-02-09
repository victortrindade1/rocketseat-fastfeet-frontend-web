import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import history from '~/services/history';

function RecipientItem({ data, onDelete }) {
  function handleEdit() {
    return history.push(`/recipients/edit/${data.id}`);
  }

  return (
    <>
      <tr>
        <td>{data.stringId}</td>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>
          <ActionsMenu>
            <button type="button" onClick={handleEdit}>
              <MdEdit size={24} color="#4d85ee" />
              Editar
            </button>
            <button type="button" onClick={onDelete}>
              <MdDeleteForever size={24} color="#de3b3b" />
              Excluir
            </button>
          </ActionsMenu>
        </td>
      </tr>
    </>
  );
}

RecipientItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    stringId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default RecipientItem;
