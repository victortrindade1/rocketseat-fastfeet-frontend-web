import React from 'react';
import PropTypes from 'prop-types';

import { Container, PhotoAvatar, LetterAvatar } from './styles';

import { createLetterAvatar } from '~/util/letterAvatar';

function Avatar({ url, name, index }) {
  const letterAvatar = createLetterAvatar(name, index);

  return (
    <Container>
      {url ? (
        <PhotoAvatar url={url} />
      ) : (
        <LetterAvatar color={letterAvatar.color}>
          {letterAvatar.letters}
        </LetterAvatar>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

Avatar.defaultProps = {
  url: '',
};

export default Avatar;
