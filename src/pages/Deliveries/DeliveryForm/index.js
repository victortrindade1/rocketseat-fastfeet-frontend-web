import React, { useState, useEffect, useMemo } from 'react';
import { Form } from 'unform';
import { toast } from 'react-toastify';

import BtnBack from '~/components/Button/BtnBack';
import BtnSave from '~/components/Button/BtnSave';
import Select from '~/components/Select';

import api from '~/services/api';

import { Container, HeaderBody, Title } from './styles';

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
        <section>
          <Select
            name="recipient.name"
            label="Destinatário"
            placeholder="Selecione um destinatário"
            options={recipientsOptions}
            defaultValue=""
            onChange=""
          />
        </section>
      </Form>
    </Container>
  );
}

export default DeliveryForm;
