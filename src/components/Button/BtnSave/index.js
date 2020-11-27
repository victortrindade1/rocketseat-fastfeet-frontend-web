import React from 'react';
import { MdDone } from 'react-icons/md';
import { Container } from './styles';

function BtnSave() {
  return (
    <Container>
      <MdDone size={24} />
      SALVAR
    </Container>
  );
}

export default BtnSave;
