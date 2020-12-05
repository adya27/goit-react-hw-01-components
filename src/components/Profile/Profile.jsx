import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.name}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className="label">Followers </span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className="label">Views </span>
          <span className="quantity">{props.views}</span>
        </li>
        <li className={styles.stat}>
          <span className="label">Likes </span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Profile;
