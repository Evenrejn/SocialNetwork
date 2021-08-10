import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
  
    let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s["main-content"]}>
          <div>
            {pages.map((p) => {
              return (
                <span
                  className={props.currentPage === p && s["selectedPage"]}
                  onClick={(e) => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
          </div>
          <h2>Users</h2>
          {props.users.map((u) => (
            <div key={u.id} className={s["wrap-users"]}>
              <div className={s["users__user-item"]}>
                <div className={s["users__user-item-main"]}>
                  <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img
                        className={s["users__user-item-img"]}
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="L"
                      />
                    </NavLink>
                  </div>

                    {u.followed ? (
                      <button
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        className={s["users__user-item-follow"]}
                        onClick={() => {props.unfollow(u.id)}}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        className={s["users__user-item-follow"]}
                        onClick={() => {props.follow(u.id)}}
                      >
                        Follow
                      </button>
                    )}
                </div>
              </div>
              <div className={s["users__info"]}>
                <div className={s["wrapper-user"]}>
                  <p className={s["users__info-name"]}>{u.name}</p>
                  <p className={s["users__info-status"]}>{u.status}</p>
                </div>
                <div className={s["wrapper-user"]}>
                  <p className={s["users__info-location"]}>
                    {"u.location.country"}
                    <br></br>
                    {"u.location.city"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Users;