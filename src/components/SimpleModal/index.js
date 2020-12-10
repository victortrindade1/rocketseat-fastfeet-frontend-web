import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

function SimpleModal({ children, open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
}

export default SimpleModal;

SimpleModal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
