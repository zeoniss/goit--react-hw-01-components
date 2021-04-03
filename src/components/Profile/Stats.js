import React from "react";

import s from "./StatsList.module.scss";

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={s.statsList}>
      <li className={s.statItem}>
        <span className={s.label}> Followers </span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.label}> Views </span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.label}> Likes </span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};
export default Stats;
