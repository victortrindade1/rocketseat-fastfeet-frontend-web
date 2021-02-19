import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  > button {
    border: 0;
    background: none;

    svg {
      color: #c6c6c6;
      transition: color 200ms;
    }

    &:hover {
      svg {
        color: ${darken(0.3, '#c6c6c6')};
      }
    }
  }
`;

export const ActionList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 5px);
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  box-shadow: 0px 0px 10px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};
  padding: 20px 10px;
  z-index: 2;

  /* Width customizado */
  ${props =>
    props.w &&
    css`
      width: ${props.w}px;
      left: calc(50% - ${props.w / 2}px);
    `}

  &::before {
    content: '▲';
    position: absolute;
    left: calc(50% - 5px);
    top: -15px;
    width: 15px;
    height: 15px;
    font-size: 20px;
    text-shadow: 0px -5px 10px #00000057;
    color: #fff;
  }

  button {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    align-items: center;
    padding: 6px 0;
    text-decoration: none;
    border: 0;
    background: none;
    width: 100%;
    color: #666666;

    svg {
      margin-right: 8px;
    }

    &:hover {
      text-decoration: underline;
    }

    & + button {
      border-top: 1px solid #e6e6e6;
    }
  }
`;
