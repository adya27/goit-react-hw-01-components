import PropTypes from 'prop-types';
import styled from 'styled-components';

const Online = styled.li`
  outline: solid 2px blue;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const Offline = styled.li`
  outline: solid 2px red;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
const OnlineSpan = styled.span`
  background-color: aqua;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const OfflineSpan = styled.span`
  background-color: coral;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

function FriendListItem(props) {
  let Current = props.isOnline ? Online : Offline;
  let CurrentSpan = props.isOnline ? OnlineSpan : OfflineSpan;
  return (
    <Current className="item">
      <CurrentSpan className="status"></CurrentSpan>
      <img
        style={{ margin: 5 }}
        className="avatar"
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p style={{ margin: 0 }} className="name">
        {props.name}
      </p>
    </Current>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
