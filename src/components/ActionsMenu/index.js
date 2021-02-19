import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';

import { Container, ActionList } from './styles';

function ActionsMenu({ children, width = undefined }) {
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
        <ActionList visible={visible} onClick={handleClickAway} w={width}>
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
