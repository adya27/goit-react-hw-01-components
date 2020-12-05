import PropTypes from 'prop-types';

function Transaction(props) {
  return (
    <tr>
      <td
        style={{
          width: '150px',
          display: 'block',
          backgroundColor: props.color,
        }}
      >
        <span style={{ paddingLeft: '20px' }}>{props.type}</span>
      </td>
      <td
        style={{
          width: '100px',
          textAlign: 'center',
          backgroundColor: props.color,
        }}
      >
        {props.amount}
      </td>
      <td
        style={{
          width: '100px',
          textAlign: 'center',
          backgroundColor: props.color,
        }}
      >
        {props.currency}
      </td>
    </tr>
  );
}

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Transaction;
