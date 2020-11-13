import React from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

// import BtnBack from '~/components/buttons/BtnBack';
// import BtnSave from '~/components/buttons/BtnSave';

import {
  Container,
  Title,
  HeaderBody,
  BtnBack,
  BtnSave,
  FormContainer,
  Form,
  RecipientBox,
  DeliverymanBox,
  ProductName,
} from './styles';

function NewEditDelivery() {
  return (
    <Container>
      <HeaderBody>
        <Title>Cadastro de encomendas</Title>
        <div>
          <BtnBack>
            <MdKeyboardArrowLeft size={24} />
            VOLTAR
          </BtnBack>
          <BtnSave>
            <MdDone size={24} />
            SALVAR
          </BtnSave>
        </div>
      </HeaderBody>
      <FormContainer>
        <Form>
          <div>
            <RecipientBox />
            <DeliverymanBox />
          </div>
          <ProductName />
        </Form>
      </FormContainer>
    </Container>
  );
}

export default NewEditDelivery;
