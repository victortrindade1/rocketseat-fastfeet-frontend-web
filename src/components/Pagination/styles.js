import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    background: none;
    border: none;
    color: ${colors.primary};
    border-radius: 50%;

    &[disabled] {
      opacity: 0.6;
      cursor: default;
    }

    &:not([disabled]):hover {
      background: ${lighten(0.3, colors.primary)};
    }
  }

  > span {
    padding: 0 15px;
    color: ${colors.primary};
    font-size: 16px;
    font-weight: bold;
  }
`;
