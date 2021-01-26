import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { AiOutlineLoading } from 'react-icons/ai';

import Input from '~/components/Form/Input';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Login } from './styles';

function SignIn() {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data, { reset }) {
    try {
      // Validation
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false, // Validation in all fields
      });

      // dispatch request
      dispatch(signInRequest(data.email, data.password));

      // clean errors
      formRef.current.setErrors({});

      // clean fields
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
      <Login>
        <img src={logo} alt="FastFeet" />

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input
            name="email"
            label="SEU E-MAIL"
            type="email"
            placeholder="exemplo@email.com"
          />
          <Input
            name="password"
            label="SUA SENHA"
            type="password"
            placeholder="**********"
          />

          <button type="submit">
            {loading ? <AiOutlineLoading /> : 'Entrar no sistema'}
          </button>
        </Form>
      </Login>
    </Container>
  );
}

export default SignIn;
