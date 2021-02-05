import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import { BackButton, SaveButton } from '~/components/Button';
import { Input, PhotoInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import api from '~/services/api';

import { Container, Content, UnForm } from './styles';

export default function DeliverymanForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  useEffect(() => {
		async function loadInitialData(deliverymanId) {
			if (id) {
				const response = await api.get(`/deliverymen/${deliverymanId}`);

        console.tron.log(response);
				formRef.current.setData(response.data);
				formRef.current.setFieldValue('avatar', response?.data?.avatar?.url);
			}
		}
		loadInitialData(id);
  }, [id]);

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      // Validação
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().required('O e-mail é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Upload da foto pro servidor
      // ? Desta forma atual, em todo submit subirá foto pro server, msm q não
      // ? mude de foto?
      const dataFile = new FormData();

      dataFile.append('file', data.avatar);

      const responseFile = data.avatar
        ? await api.post('/deliverymen/avatar', dataFile)
        : null;

      if (id) {
        await api.put(`/deliverymen/${id}`, {
          name: data.name,
          email: data.email,
          avatar_id: responseFile?.data?.id,
        });
        toast.success('Entregador editado com sucesso!');
      } else {
        await api.post('/deliverymen', {
          name: data.name,
          email: data.email,
          avatar_id: responseFile?.data?.id,
        });
        toast.success('Entregador criado com sucesso!');
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

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de Entregadores">
          <BackButton />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <UnForm onSubmit={handleSubmit} ref={formRef}>
          <PhotoInput name="avatar" />
          <Input
            type="text"
            label="Nome"
            name="name"
            placeholder="Nome do entregador"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
          <Input
            type="text"
            label="E-mail"
            name="email"
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
