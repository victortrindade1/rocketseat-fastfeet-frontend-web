import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border-radius: 50%;
  position: relative;
  width: 35px;
  height: 35px;
  overflow: hidden;
`;

export const PhotoAvatar = styled.img.attrs(props => ({
  src: props.url,
  alt: 'avatar',
}))`
  height: auto;
  width: 100%;
`;

export const LetterAvatar = styled.div`
  background: ${props => props.color};
  color: ${props => darken(0.3, props.color)};
  line-height: 35px;
  text-align: center;
  height: auto;
  width: 100%;
`;
