import React from "react";
import PropTypes from "prop-types";
import s from "./FriendsList.module.scss";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={s.item}>
      {status ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <span className={s.name}>{name}</span>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
export default FriendListItem;
