import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  items: PropTypes.array.isRequired,
};
