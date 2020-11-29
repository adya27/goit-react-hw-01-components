import Statistics from './Statistics';
import PropTypes from 'prop-types';

function statisticList({ title = 'Upload stats', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {stats.map(prop => (
        <Statistics
          key={prop.id}
          stats={prop}
          label={prop.label}
          percentage={prop.percentage + '%'}
        />
      ))}
    </section>
  );
}

statisticList.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default statisticList;
