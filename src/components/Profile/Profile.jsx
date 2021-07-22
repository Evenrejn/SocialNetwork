import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
// import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s["main-content"]}>
      <div className={s["main-content__page-img"]}></div>
      <div className={s.wrap}>
        <ProfileInfo />
        <div className={s["main-content__about-user"]}>
          <h3 className={s["main-content__about-user-name"]}>Your Name</h3>
          <p className={s["main-content__about-user-short"]}>Date of Birth:</p>
          <p className={s["main-content__about-user-short"]}>City:</p>
          <p className={s["main-content__about-user-short"]}>Education</p>
          <p className={s["main-content__about-user-short"]}>Web Site</p>
        </div>
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
