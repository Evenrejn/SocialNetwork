import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/default_avatar.png";

class User extends React.Component {
  render() {
    return (
      <div className={s["main-content"]}>
        <h2>Users</h2>
        {props.users.map((u) => (
          <div key={u.id} className={s["wrap-users"]}>
            <div className={s["users__user-item"]}>
              <div className={s["users__user-item-main"]}>
                <div>
                  <img
                    className={s["users__user-item-img"]}
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="L"
                  />
                </div>
                {u.followed ? (
                  <button
                    className={s["users__user-item-follow"]}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s["users__user-item-follow"]}
                    onClick={() => {
                      props.follow(u.id);
                    }}
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
        <button className={s["users__upload-more"]} onClick={getUsers}>
          Show more
        </button>
      </div>
    );
  }
}

export default Users;
