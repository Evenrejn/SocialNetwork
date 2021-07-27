import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    <Preloader />;
  }
  debugger;
  return (
    <div className={s["main-content__avatar"]}>
      {/* <img src={props.profile.photos.large} /> */}
      <img
        src="https://cs8.pikabu.ru/images/previews_comm/2016-04_6/1461946865356198133.jpg"
        width="80"
        height="80"
        alt="avatar"
      />
    </div>
  );
};

export default ProfileInfo;
