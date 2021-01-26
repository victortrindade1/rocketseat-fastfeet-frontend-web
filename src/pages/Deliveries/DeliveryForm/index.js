import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import BackButton from '~/components/Button/BackButton';
import SaveButton from '~/components/Button/SaveButton';
import Select from '~/components/Select';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, HeaderBody, Title, FormContainer } from './styles';

function DeliveryForm({ match }) {
  const { id } = match.params;

  const formRef = useRef(null);

  const [delivery, setDelivery] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliveryman] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(null);
  const [defaultValueRecipient, setDefaultValueRecipient] = useState(null);

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

        // // Se for edição
        // if (id) {
        //   const { data } = await api.get(`deliveries/${id}`);
        //   console.tron.log(data);

        //   // formRef.current.setData({
        //   //   recipient: data.recipient,

        //   // });

        //   setDelivery(data);
        //   setSelectedRecipient(data.recipient);
        //   setSelectedDeliveryman(data.deliveryman);

        //   if (data.recipient.id) {
        //     setDefaultValueRecipient({
        //       value: data.recipient.id,
        //       label: data.recipient.name,
        //     });
        //   }
        // }
      } catch (err) {
        toast.error('Falha ao carregar dados');
      }
    }

    loadData();
  }, [id]);

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

  // function handleGoBack(e) {
  //   e.preventDefault(); // Cancela submit do form

  //   // history.goBack(); // ou history.push('/deliveries');
  //   history.push('/deliveries');
  // }

  function handleSave() {
    formRef.current.submitForm();
  }

  function handleChangeRecipient(data) {
    setSelectedRecipient(data.value);
  }

  function handleChangeDeliveryman(data) {
    setSelectedDeliveryman(data.value);
  }

  return (
    <Container>
      <Content>
        {/* <Form onSubmit={handleSubmit} initialData={delivery || undefined}> */}
        <Form onSubmit={handleSubmit} ref={formRef}>
          <HeaderBody>
            <Title>Cadastro de encomendas</Title>
            <div>
              <BackButton />
              <SaveButton action={handleSave} />
            </div>
          </HeaderBody>
          <FormContainer>
            {console.tron.log(defaultValueRecipient)}
            <Select
              name="recipient.name"
              label="Destinatário"
              placeholder="Selecione um destinatário"
              options={recipientsOptions}
              defaultValue={defaultValueRecipient || undefined}
              onChange={handleChangeRecipient}
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
            />
            <Select
              name="deliveryman.name"
              label="Entregador"
              placeholder="Selecione um entregador"
              options={deliverymanOptions}
              defaultValue={
                delivery
                  ? {
                      value: delivery.deliveryman.id,
                      label: delivery.deliveryman.name,
                    }
                  : undefined
              }
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
      </Content>
    </Container>
  );
}

export default DeliveryForm;

DeliveryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
