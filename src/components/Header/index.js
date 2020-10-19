import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logout } from './styles';

function Header() {
  return (
    <Container>
      {/* <Link>
        <img src="" alt="" />
      </Link>
      <Link>Encomendas</Link>
      <Link>Entregadores</Link>
      <Link>Destinatários</Link>
      <Link>Problemas</Link> */}

      <Logout>
        <strong>Alfredo Frefredo</strong>
        <button type="submit">sair do sistema</button>
      </Logout>
    </Container>
  );
}

export default Header;
