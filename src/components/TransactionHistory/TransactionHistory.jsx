import PropTypes from 'prop-types';
import Transaction from './Transaction';

function TransactionHistory({ props }) {
  return (
    <table
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
      className="transaction-history"
    >
      <thead>
        <tr>
          <th style={{ backgroundColor: 'teal' }}> Type </th>
          <th style={{ backgroundColor: 'teal' }}>Amount</th>
          <th style={{ backgroundColor: 'teal' }}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, index) => {
          let color = index % 2 === 0 ? 'green' : 'yellow';

          return (
            <Transaction
              color={color}
              key={prop.id}
              type={prop.type}
              currency={prop.currency}
              amount={prop.amount}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.array.isRequired,
};

export default TransactionHistory;
