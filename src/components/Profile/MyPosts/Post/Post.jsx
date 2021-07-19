import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s["main-content__posts-list"]}>
      <img
        className={s["main-content__posts-img"]}
        src="https://cs8.pikabu.ru/images/previews_comm/2016-04_6/1461946865356198133.jpg"
        width="30"
        height="30"
        alt="avatar"
      />
      <p className={s["main-content__posts__text"]}>{props.message}</p>
      <p className={s["main-content__posts__text"]}>{props.likesCount}</p>
    </div>
  );
};

export default Post;
