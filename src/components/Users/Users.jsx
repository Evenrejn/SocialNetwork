import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "#",
        followed: false,
        fullName: "Egor",
        status: "Jarr",
        location: { city: "Minsk", country: "Bel" },
      },
      {
        id: 2,
        photoUrl: "#",
        followed: true,
        fullName: "Vova",
        status: "HW",
        location: { city: "Msk", country: "Ru" },
      },
      {
        id: 3,
        photoUrl: "#",
        followed: false,
        fullName: "Ira",
        status: "HarKun",
        location: { city: "SPb", country: "Ru" },
      },
      {
        id: 4,
        photoUrl: "#",
        followed: true,
        fullName: "Tanya",
        status: "Status)",
        location: { city: "Elgsk", country: "Ru" },
      },
    ]);
  }

  return (
    <div>
      dghdth
      {/* {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img />
            </div>
            <button>Follow</button>
            <div>
              <img />
            </div>
            <button>Follow</button>{}
          </div>
          {u.followed 
            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
        }
        </div>{u.fullName}{u.status}{u.location.country}{u.location.city}{u.photoUrl}
      ))} */}
    </div>
  );
};

export default Users;
