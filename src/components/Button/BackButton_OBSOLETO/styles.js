import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  width: 112px;
  height: 36px;
  background: #cccccc;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
  border: none;

  &:hover {
    background: ${darken(0.1, '#cccccc')};
  }
`;
