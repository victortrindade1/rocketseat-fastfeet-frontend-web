import React from 'react';
import { Form, Input } from 'unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Login } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .required('A senha é obrigatória'),
});

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
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
            <strong>Entrar no sistema</strong>
          </button>
        </Form>
      </Login>
    </Container>
  );
}

export default SignIn;
