import PropTypes from 'prop-types';

function Statistics({ title = 'Upload stats', label, percentage }) {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label} </span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Statistics;
