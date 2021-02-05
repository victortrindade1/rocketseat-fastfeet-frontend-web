import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const UnForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  background: #fff;

  width: 100%;
  border-radius: 4px;
`;
