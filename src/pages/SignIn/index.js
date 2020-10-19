import React from 'react';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Form } from './styles';

function SignIn() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="FastFeet" />

        <form>
          <strong>SEU E-MAIL</strong>
          <input type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <input type="password" placeholder="**********" />

          <button type="submit">
            <strong>Entrar no sistema</strong>
          </button>
        </form>
      </Form>
    </Container>
  );
}

export default SignIn;
