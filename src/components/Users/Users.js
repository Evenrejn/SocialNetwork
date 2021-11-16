import React, {useState} from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import { NavLink } from 'react-router-dom';
import cn from "classnames";
import Paginator from "../common/Paginator/Paginator";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow, ...props}) => {

    return (
        <div className={s["main-content"]}>
          <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
          <h2>Users</h2>
          {users.map((u) => (
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
                        disabled={followingInProgress.some(id => id === u.id)}
                        className={s["users__user-item-follow"]}
                        onClick={() => {unfollow(u.id)}}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        disabled={followingInProgress.some(id => id === u.id)}
                        className={s["users__user-item-follow"]}
                        onClick={() => {follow(u.id)}}
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