import React, { useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import SimpleModal from '~/components/SimpleModal';
import ShowProblem from '~/pages/Problems/ShowProblem';

function ProblemItem({ data, onDelete }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <tr>
        <td>{data.stringId}</td>
        <td>{data.description}</td>
        <td>
          <ActionsMenu>
            <button type="button" onClick={handleOpenModal}>
              <MdEdit size={24} color="#4d85ee" />
              Visualizar
            </button>
            <button type="button" onClick={onDelete}>
              <MdDeleteForever size={24} color="#de3b3b" />
              Cancelar encomenda
            </button>
          </ActionsMenu>
        </td>
      </tr>
      <SimpleModal open={openModal} handleClose={handleCloseModal}>
        <ShowProblem />
      </SimpleModal>
    </>
  );
}

ProblemItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    stringId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ProblemItem;
