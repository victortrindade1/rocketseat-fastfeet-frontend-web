import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { BackButton, SaveButton } from '~/components/Button';
import { Input, MaskInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import api from '~/services/api';

import { Container, Content, UnForm } from './styles';

function RecipientForm({ match }) {
  const formRef = useRef(null);
  const { id } = match.params;

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('O nome da rua é obrigatório'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        zipcode: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/recipients/${id}`, {
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
        });
        toast.success('Destinatário editado com sucesso!');
      } else {
        await api.post('/recipients', {
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
        });
        toast.success('Destinatário criado com sucesso!');
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

  // Carrega dados iniciais (p/ rota de edição)
  useEffect(() => {
    async function loadInitialData(recipientId) {
      if (id) {
        const response = await api.get(`/recipients/${recipientId}`);

        formRef.current.setData(response.data);
      }
    }
    loadInitialData(id);
  }, [id]);

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de Destinatários">
          <BackButton />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Nome"
            name="name"
            placeholder="Nome do destinatário"
          />
          <div>
            <Input
              type="text"
              label="Rua"
              name="street"
              placeholder="Nome da rua"
            />
            <Input
              type="text"
              label="Número"
              name="number"
              placeholder="Número"
            />
            <Input
              type="text"
              label="Complemento"
              name="complement"
              placeholder="Complemento"
            />
          </div>
          <div>
            <Input
              type="text"
              label="Cidade"
              name="city"
              placeholder="Nome da cidade"
            />
            <Input
              type="text"
              label="Estado"
              name="state"
              placeholder="Nome do estado"
            />
            <MaskInput
              type="text"
              label="CEP"
              name="zipcode"
              placeholder="00000-000"
              mask="99999-999"
              maskPlaceholder="_____-___"
              onKeyPress={e =>
                e.key === 'Enter' ? formRef.current.submitForm() : null
              }
            />
          </div>
        </UnForm>
      </Content>
    </Container>
  );
}

RecipientForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RecipientForm;
