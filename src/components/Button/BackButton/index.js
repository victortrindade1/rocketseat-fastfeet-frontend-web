import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import IconButton from '../IconButton';

export default function BackButton() {
  function handleGoBack(e) {
    e.preventDefault(); // TODO: Testar este preventDefault se é necessário

    history.goBack();
  }

  return (
    <IconButton
      title="VOLTAR"
      Icon={MdKeyboardArrowLeft}
      action={handleGoBack}
      background="#CCC"
    />
  );
}
