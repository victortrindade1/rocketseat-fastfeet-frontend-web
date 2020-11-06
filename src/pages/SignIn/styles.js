import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/styles/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50%{
    transform: scale(1.05);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`;

export const Logo = styled.div`
  height: 50px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  max-width: 360px;
  padding: 60px 30px 60px 30px;
  animation: ${appear} 350ms linear backwards;

  img {
    padding-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }

  strong {
    padding: 10px 0px 10px 0px;
    font-size: 14px;
  }

  input {
    padding: 12px 15px 12px 15px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    opacity: 1;
    font-size: 16px;
    color: #555555;

    ::placeholder {
      color: ${colors.secondary};
    }
  }

  button {
    margin-top: 15px;
    background: ${colors.primary};
    border-radius: 4px;
    height: 45px;
    border: none;
    font-size: 16px;
    padding: 12px;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    animation: ${appear} 350ms linear backwards;
    animation-delay: 350ms;

    &:hover {
      background: ${darken(0.2, colors.primary)};
    }

    svg {
      width: 20px;
      height: 20px;
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
