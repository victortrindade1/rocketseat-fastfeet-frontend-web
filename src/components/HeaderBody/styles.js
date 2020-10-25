import styled from 'styled-components';
import colors from '~/styles/colors';

export const Div = styled.div`
  display: flex;
  justify-content: ${props =>
    props.placeholder ? 'space-between' : 'flex-end'};

  button {
    background: ${colors.primary};
    border-radius: 4px;
    border: none;
    opacity: 1;
    height: 36px;
    width: 142px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      padding-right: 5px;
      width: 30px;
      height: auto;
      color: #fff;
    }
  }
`;
