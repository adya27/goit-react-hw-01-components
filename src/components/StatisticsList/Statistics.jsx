import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title = 'Upload stats', label, percentage }) {
  return (

      <li className={styles.item}>
        <span className="label">{label} </span>
        <span className="percentage">{percentage}</span>
      </li>

  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Statistics;
