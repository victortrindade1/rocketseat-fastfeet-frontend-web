import styled, { keyframes, css } from 'styled-components';
import { Form as FormUnform } from '@unform/web';

import { colors } from '~/styles/colors';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

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

  > svg {
    color: ${colors.secondary};
    width: 18px;
    height: auto;

    ${props =>
      props.searching &&
      css`
      animation ${rotate} 1s linear infinite;
    `}
  }
`;

export const Input = styled.input`
  font-size: 14px;
  color: ${colors.secondary};
  border: none;
  height: 100%;
`;

export const Error = styled.span`
  color: ${colors.danger};
  margin-top: 8px;

  & + label {
    margin-top: 8px;
  }
`;
