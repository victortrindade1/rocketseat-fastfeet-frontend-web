import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Profile, Navigation, Logo } from './styles';

import logo from '~/assets/fastfeet-logo.png';

function Header() {
  return (
    <Container>
      <nav>
        <Navigation>
          <NavLink to="/deliveries">
            <Logo>
              <img src={logo} alt="FastFeet" />
            </Logo>
          </NavLink>

          <NavLink to="/deliveries">ENCOMENDAS</NavLink>
          <NavLink to="/deliverymen">ENTREGADORES</NavLink>
          <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
          <NavLink to="/problems">PROBLEMAS</NavLink>
        </Navigation>
      </nav>
      <aside>
        <Profile>
          <strong>Alfredo Frefredo</strong>
          <button type="submit">sair do sistema</button>
        </Profile>
      </aside>
    </Container>
  );
}

export default Header;
