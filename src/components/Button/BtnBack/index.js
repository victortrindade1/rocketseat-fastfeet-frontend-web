import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Container } from './styles';

function Back() {
  return (
    <Container>
      <MdKeyboardArrowLeft size={24} />
      VOLTAR
    </Container>
  );
}

export default Back;
