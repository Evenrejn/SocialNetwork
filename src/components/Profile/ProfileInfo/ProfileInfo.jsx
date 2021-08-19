import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s["main-content__page-img"]}>
        {/* <img
          className={s["main-content__page-img"]}
          src={props.profile.photos.large}
        /> */}
      </div>
      <div className={s.wrap}>
        <div className={s["main-content__avatar"]}>
          <div className={s["main-content__about-user"]}>
            <h3 className={s["main-content__about-user-name"]}>
              {props.profile.fullName}
            </h3>
            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <p className={s["main-content__about-user-short"]}>
              {props.profile.aboutMe}
            </p>
            <p className={s["main-content__about-user-short"]}>
              {props.profile.lookingForAJobDescription}
            </p>
          </div>

          <div>{props.profile.lookingForAJob ? "rrrrrr" : "no"}</div>

          {/* <img
          src="https://cs8.pikabu.ru/images/previews_comm/2016-04_6/1461946865356198133.jpg"
          width="80"
          height="80"
          alt="avatar"
        /> */}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
