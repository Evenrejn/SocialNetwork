import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s["main-content__posts"]}>
        <p className={s["main-content__posts__my-posts"]}>My posts</p>
        {/* <textarea
          className={s["main-content__posts-input"]}
          ref={newPostElement}
          value={props.onPostText}
          onChange={onPostChange}
          // value={props.newPostText}
        > */}
        {/* {props.value}
        </textarea> */}

        <textarea
          className={s["main-content__posts-input"]}
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
          // value={props.newPostText}
        />

        <button onClick={onAddPost} className={s["main-content__send-post"]}>
          Add post
        </button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
