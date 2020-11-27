import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Container } from './styles';

function BtnBack({ action }) {
  return (
    <Container onClick={action}>
      <MdKeyboardArrowLeft size={24} />
      VOLTAR
    </Container>
  );
}

export default BtnBack;

BtnBack.propTypes = {
  action: PropTypes.func.isRequired,
};
