import styled from 'styled-components';
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

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.dark};
`;
