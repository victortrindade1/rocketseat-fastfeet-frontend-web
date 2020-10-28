import React from 'react';

// import { Container } from './styles';

function DeliveryItem({ data }) {
  // Será q eu consigo acessa o state deliveries daqui? Se sim, eu poderia incrementar no state o novo idText
  // const formatId = id => (id > 9 ? `#${id}` : `#0${id}`);

  return (
    <tr>
      <td>{data.stringId}</td>
      <td>{data.recipient.name}</td>
      <td>{data.deliveryman.name}</td>
      <td>{data.recipient.city}</td>
      <td>{data.recipient.state}</td>
      <td>ENTREGUE</td>
      <td>...</td>
    </tr>
  );
}

export default DeliveryItem;
