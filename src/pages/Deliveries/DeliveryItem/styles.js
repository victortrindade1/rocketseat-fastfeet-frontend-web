import styled from 'styled-components';

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
`;
