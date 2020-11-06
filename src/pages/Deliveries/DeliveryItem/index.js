import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '~/components/Avatar';

import { DeliverymanContainer, DeliverymanName } from './styles';

function DeliveryItem({ data, index }) {
  return (
    <tr>
      {console.tron.log(data)}
      <td>{data.stringId}</td>
      <td>{data.recipient.name}</td>
      <td>
        <DeliverymanContainer>
          <Avatar
            url={data.deliveryman.avatar ? data.deliveryman.avatar.url : ''}
            name={data.deliveryman.name}
            index={index}
          />
          <DeliverymanName>
            <span>{data.deliveryman.name}</span>
          </DeliverymanName>
        </DeliverymanContainer>
      </td>
      <td>{data.recipient.city}</td>
      <td>{data.recipient.state}</td>
      <td>ENTREGUE</td>
      <td>...</td>
    </tr>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    stringId: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    deliveryman: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// DeliveryItem.defaultProps = {
//   data: PropTypes.shape({
//     deliveryman: PropTypes.shape({
//       avatar: PropTypes.shape({
//         url: '',
//       }),
//     }),
//   }),
// };

export default DeliveryItem;
