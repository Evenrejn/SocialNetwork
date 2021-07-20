import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={s["nav-wrap"]}>
      <nav className={s.nav}>
        <ul className={s["header__menu-list"]}>
          <li>
            <NavLink to="/profile" className={s["header__menu-list-item"]}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" className={s["header__menu-list-item"]}>
              Message
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={s["header__menu-list-item"]}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" className={s["header__menu-list-item"]}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting" className={s["header__menu-list-item"]}>
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className={s["friends"]}>Friends</p>
      <div className={s["friends-wrap"]}>
        <div className={s["friends-item"]}>
          <img
            className={s["friends-img"]}
            src="http://placehold.it/40x40/"
            alt="A"
          />
          <p className={s["friends-name"]}>{props.state[0].name}</p>
        </div>
        <div className={s["friends-item"]}>
          <img
            className={s["friends-img"]}
            src="http://placehold.it/40x40/"
            alt="A"
          />
          <p className={s["friends-name"]}>{props.state[1].name}</p>
        </div>
        <div className={s["friends-item"]}>
          <img
            className={s["friends-img"]}
            src="http://placehold.it/40x40/"
            alt="A"
          />
          <p className={s["friends-name"]}>{props.state[2].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
