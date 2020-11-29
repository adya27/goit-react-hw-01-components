import PropTypes from 'prop-types';

function FriendListItem(props) {
  return (
    <li className="item">
      <span className="status"> {props.isOnline ? 'Online' : 'Offline'} </span>
      <img className="avatar" src={props.avatar} alt={props.name} width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
