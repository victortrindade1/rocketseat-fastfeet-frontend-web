import styled from 'styled-components';
import { Form as FormUnform, Input as InputUnform } from 'unform';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export const HeaderBody = styled.div`
  padding: 34px 0px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const BtnBack = styled.div`
  width: 112px;
  height: 36px;
  background: #cccccc;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
`;

export const BtnSave = styled.div`
  width: 112px;
  height: 36px;
  background: #7d40e7;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
`;

export const FormContainer = styled.div``;

export const Form = styled(FormUnform)``;

export const RecipientBox = styled.div``;

export const DeliverymanBox = styled.div``;

export const ProductName = styled(InputUnform)``;
