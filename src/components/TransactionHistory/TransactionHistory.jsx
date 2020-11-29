import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';

function TransactionHistory({ props }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th> Type </th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.map(prop => (
          <Transaction
            key={prop.id}
            type={prop.type}
            currency={prop.currency}
            amount={prop.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.array.isRequired,
};

export default TransactionHistory;
