import styled from 'styled-components';
import colors from '~/styles/colors';

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
      color: #999999;
    }
  }

  button {
    margin-top: 15px;
    background-color: ${colors.primary};
    border-radius: 4px;
    height: 45px;
    border: none;

    strong {
      color: #fff;
      padding: 12px 20px 12px 20px;
      font-size: 16px;
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
