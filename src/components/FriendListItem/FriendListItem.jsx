import PropTypes from 'prop-types';
import { Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
