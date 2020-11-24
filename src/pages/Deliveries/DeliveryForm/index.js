import React, { useState, useEffect, useMemo } from 'react';
import { Form } from 'unform';
import { toast } from 'react-toastify';

import BtnBack from '~/components/Button/BtnBack';
import BtnSave from '~/components/Button/BtnSave';
import Select from '~/components/Select';
import Input from '~/components/Input';

import api from '~/services/api';

import { Container, HeaderBody, Title, FormContainer } from './styles';

function DeliveryForm() {
  // const [delivery, setDelivery] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliveryman] = useState([]);
  // const [selectedRecipient, setSelectedRecipient] = useState(null);
  // const [selectedDeliveryman, setSelectedDeliveryman] = useState(null);

  // Carrega dados na tela
  useEffect(() => {
    async function loadData() {
      try {
        const [recipientResponse, deliverymanResponse] = await Promise.all([
          api.get('recipients', { params: { limit: 300 } }),
          api.get('deliverymen', { params: { limit: 300 } }),
        ]);

        setRecipients(recipientResponse.data);
        setDeliveryman(deliverymanResponse.data);
        // console.tron.log(deliverymen);
      } catch (err) {
        toast.error('Falha ao carregar dados');
      }
    }

    loadData();
  }, []);

  const recipientsOptions = useMemo(() => {
    return recipients.map(recipient => ({
      value: recipient,
      label: recipient.name,
    }));
  }, [recipients]);

  const deliverymanOptions = useMemo(() => {
    return deliverymen.map(deliveryman => ({
      value: deliveryman,
      label: deliveryman.name,
    }));
  }, [deliverymen]);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <HeaderBody>
          <Title>Cadastro de encomendas</Title>
          <div>
            <BtnBack />
            <BtnSave type="submit" />
          </div>
        </HeaderBody>
        <FormContainer>
          <Select
            name="recipient.name"
            label="Destinatário"
            placeholder="Selecione um destinatário"
            options={recipientsOptions}
            defaultValue=""
            onChange=""
          />
          <Select
            name="deliveryman.name"
            label="Entregador"
            placeholder="Selecione um entregador"
            options={deliverymanOptions}
            defaultValue=""
            onChange=""
          />

          <Input
            name="product"
            title="Nome do produto"
            placeholder="Ex: Livro"
          />
        </FormContainer>
      </Form>
    </Container>
  );
}

export default DeliveryForm;
