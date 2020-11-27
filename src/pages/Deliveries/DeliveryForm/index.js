import React, { useState, useEffect, useMemo } from 'react';
import { Form } from 'unform';
import { toast } from 'react-toastify';

import BtnBack from '~/components/Button/BtnBack';
import BtnSave from '~/components/Button/BtnSave';
import Select from '~/components/Select';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, HeaderBody, Title, FormContainer } from './styles';

function DeliveryForm() {
  // const [delivery, setDelivery] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliveryman] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(null);

  // Carrega Entregadores e Destinatários
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

  async function handleSubmit(data) {
    if (!selectedRecipient || !selectedDeliveryman || !data.product) {
      toast.error('Preencha todo o formulário');
      return;
    }

    data.recipient_id = selectedRecipient.id;
    data.deliveryman_id = selectedDeliveryman.id;

    try {
      await api.post('/deliveries', data);

      toast.success('Encomenda criada com sucesso!');

      history.push('/deliveries');
    } catch (error) {
      console.tron.log(error);
      toast.error(
        'Não foi possível realizar o cadastro. Verifique seus dados.'
      );
    }
  }

  function handleGoBack(e) {
    e.preventDefault(); // Cancela submit do form

    // history.goBack(); // ou history.push('/deliveries');
    history.push('/deliveries');
  }

  function handleChangeRecipient(data) {
    setSelectedRecipient(data.value);
  }

  function handleChangeDeliveryman(data) {
    setSelectedDeliveryman(data.value);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <HeaderBody>
          <Title>Cadastro de encomendas</Title>
          <div>
            <BtnBack type="button" action={handleGoBack} />
            <BtnSave type="submit" />
          </div>
        </HeaderBody>
        <FormContainer>
          <Select
            name="recipient"
            label="Destinatário"
            placeholder="Selecione um destinatário"
            options={recipientsOptions}
            defaultValue=""
            onChange={handleChangeRecipient}
            noOptionsMessage={() => 'Nenhum destinatário encontrado'}
          />
          <Select
            name="deliveryman"
            label="Entregador"
            placeholder="Selecione um entregador"
            options={deliverymanOptions}
            defaultValue=""
            onChange={handleChangeDeliveryman}
            noOptionsMessage={() => 'Nenhum deliveryman encontrado'}
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
