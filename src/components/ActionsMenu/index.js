import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { Container, ActionList } from './styles';

function ActionsMenu({ children }) {
  /*
   * ClickAwayListener do Material-UI detecta qnd clica fora do menu
   */
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(prev => !prev);
  }

  function handleClickAway() {
    setVisible(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        <button type="button" onClick={handleClick}>
          <MdMoreHoriz size={24} />
        </button>
        <ActionList visible={visible} onClick={handleClickAway}>
          {children}
        </ActionList>
      </Container>
    </ClickAwayListener>
  );
}

export default ActionsMenu;

ActionsMenu.propTypes = {
  // children = array de divs
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  ).isRequired,
};
