import styled from 'styled-components';
import { darken } from 'polished';

export const DeliverymanContainer = styled.div`
  display: flex;
`;

export const DeliverymanName = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }
`;

export const StatusDelivery = styled.div`
  background: ${props => props.color};
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  color: ${props => darken(0.4, props.color)};
  padding: 3px 7px;
  border-radius: 12px;

  /* Ícone bolinha feito em CSS */
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 6px;
    background: ${props => darken(0.4, props.color)};
  }
`;
