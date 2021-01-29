import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';

import HeaderForm from '~/components/HeaderForm';
import BackButton from '~/components/Button/BackButton';
import SaveButton from '~/components/Button/SaveButton';
import Input from '~/components/Form/Input';
import AsyncSelectInput from '~/components/Form/AsyncSelectInput';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, UnForm } from './styles';

function DeliveryForm({ match }) {
  const { id } = match.params;

  const formRef = useRef(null);

  // Rota p/ edição. Carrega dados iniciais
  useEffect(() => {
    async function loadInitialData(deliveryId) {
      if (id) {
        const response = await api.get(`/deliveries/${deliveryId}`);

        // Neste caso, só vai popular o input. O Unform rastreia pelo nome q vem
        // da api, e popula onde tem msm nome na prop name do component
        formRef.current.setData(response.data);

        console.tron.log(formRef);
        formRef.current.setFieldValue('recipient_id', {
          value: response.data.recipient.id,
          label: response.data.recipient.name,
        });
        formRef.current.setFieldValue('deliveryman_id', {
          value: response.data.deliveryman.id,
          label: response.data.deliveryman.name,
        });
      }
    }
    loadInitialData(id);
  }, [id]);

  const customStylesSelectInput = {
    control: provided => ({
      ...provided,
      height: 45,
    }),
  };

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required('O nome do produto é obrigatório'),
        recipient_id: Yup.string().required('O destinatário é obrigatório'),
        deliveryman_id: Yup.string().required('O entregador é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/deliveries/${id}`, {
          product: data.product,
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
        });
        history.push('/deliveries');
        toast.success('Encomenda editada com sucesso!');
      } else {
        await api.post('/deliveries', {
          product: data.product,
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
        });
        toast.success('Encomenda criada com sucesso!');
      }

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  async function loadRecipientOptions(inputValue, callback) {
    const response = await api.get('/recipients', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliverymenOptions(inputValue, callback) {
    const response = await api.get('/deliverymen', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de encomendas">
          <BackButton />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <UnForm onSubmit={handleSubmit} ref={formRef}>
          <section>
            <AsyncSelectInput
              type="text"
              label="Destinatário"
              name="recipient_id"
              placeholder="Destinatários"
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={loadRecipientOptions}
              styles={customStylesSelectInput}
            />
            <AsyncSelectInput
              type="text"
              label="Entregador"
              name="deliveryman_id"
              placeholder="Entregadores"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymenOptions}
              styles={customStylesSelectInput}
            />
          </section>

          <Input
            label="Nome do produto"
            name="product"
            type="text"
            placeholder="Nome do produto"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
        </UnForm>
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
