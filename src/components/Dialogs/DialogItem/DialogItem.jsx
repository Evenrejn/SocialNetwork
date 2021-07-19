import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s["dialods-item__avatar-wrap"]}>
      <img
        className={s["dialods-item__avatar"]}
        src="http://placehold.it/40x40/"
        alt="A"
      />
      <li className={s["dialogs__name-single"]}>
        <NavLink to={path}>{props.name}</NavLink>
      </li>
    </div>
  );
};

export default DialogItem;
