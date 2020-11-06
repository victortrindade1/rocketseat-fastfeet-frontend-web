import styled from 'styled-components';
import { Form as FormUnform, Input as InputUnform } from 'unform';

import { colors } from '~/styles/colors';

export const Form = styled(FormUnform)`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  opacity: 1;
  max-width: 237px;
  height: 36px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  padding: 0px 5px 0px 10px;

  svg {
    color: ${colors.secondary};
    width: 18px;
    height: auto;
  }
`;

export const Input = styled(InputUnform)`
  font-size: 14px;
  color: ${colors.secondary};
  border: none;
  height: 100%;
`;
