import styles from './Statistics.module.css';

import Statistics from './Statistics';
import PropTypes from 'prop-types';

function statisticList({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(prop => (
          <Statistics
            key={prop.id}
            stats={prop}
            label={prop.label}
            percentage={prop.percentage + '%'}
          />
        ))}
      </ul>
    </section>
  );
}

statisticList.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default statisticList;
