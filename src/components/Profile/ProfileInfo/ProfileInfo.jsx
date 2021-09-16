import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s["main-content__page-img"]}>
      </div>
      <div className={s.wrap}>
        <div className={s["main-content__avatar"]}>
          <div className={s["main-content__about-user"]}>
            <h3 className={s["main-content__about-user-name"]}>
              {props.profile.fullName}
            </h3>
            <ProfileStatusWithHooks
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

        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
