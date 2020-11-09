import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, ActionList } from './styles';

function ActionsMenu({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggle}>
        <MdMoreHoriz size={24} />
      </button>
      <ActionList visible={visible} onClick={handleToggle}>
        {children}
      </ActionList>
    </Container>
  );
}

export default ActionsMenu;

ActionsMenu.propTypes = {
  // children = array de divs
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  ).isRequired,
};
