import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Statistics({ title = 'Upload stats', label, percentage }) {
  return (
    <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={styles.label}>{label} </span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Statistics;
