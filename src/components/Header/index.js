import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Profile, Navigation, Logo } from './styles';

import logo from '~/assets/fastfeet-logo.png';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <strong>{profile.name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </Profile>
      </aside>
    </Container>
  );
}

export default Header;
