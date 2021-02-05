import React, { useRef } from 'react';

import HeaderForm from '~/components/HeaderForm';
import { BackButton, SaveButton } from '~/components/Button';

// import Input from '~/components/Form/Input';
import { Input, PhotoInput } from '~/components/Form';

import { Container, Content, UnForm } from './styles';

function DeliverymanForm() {
  const formRef = useRef(null);

  function handleSubmit() {}
  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de Entregadores">
          <BackButton />
          <SaveButton action={() => formRef.current.submit()} />
        </HeaderForm>

        <UnForm onSubmit={handleSubmit} ref={formRef}>
          <PhotoInput name="avatar" />
          <Input
            type="text"
            label="Nome"
            name="deliverymanName"
            placeholder="Nome do entregador"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
          <Input
            type="text"
            label="E-mail"
            name="deliverymanEmail"
            placeholder="E-mail do entregador"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
        </UnForm>
      </Content>
    </Container>
  );
}

export default DeliverymanForm;
