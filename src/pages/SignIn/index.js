import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'unform';
import * as Yup from 'yup';
import { AiOutlineLoading } from 'react-icons/ai';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Login } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Login>
        <img src={logo} alt="FastFeet" />

        <Form onSubmit={handleSubmit} schema={schema}>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <Input name="password" type="password" placeholder="**********" />

          <button type="submit">
            {loading ? <AiOutlineLoading /> : 'Entrar no sistema'}
          </button>
        </Form>
      </Login>
    </Container>
  );
}

export default SignIn;
