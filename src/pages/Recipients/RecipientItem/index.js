import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import ActionsMenu from '~/components/ActionsMenu';
import history from '~/services/history';

function RecipientItem({ data, onDelete }) {
  function handleEdit() {
    return history.push(`/recipients/edit/${data.id}`);
  }

  return (
    <>
      <tr>
        <td />
        <td />
        <td />
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

export default RecipientItem;
