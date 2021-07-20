import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s["main-content__posts"]}>
        <p className={s["main-content__posts__my-posts"]}>My posts</p>
        <textarea
          className={s["main-content__posts-input"]}
          ref={newPostElement}
          value={props.onPostText}
          onChange={onPostChange}
        >
          {props.value}
        </textarea>
        {/* <input
          ref={newPostElement}
          className={s["main-content__posts-input"]}
          type="text"
          placeholder="your news..."
        /> */}
        <button onClick={addPost} className={s["main-content__send-post"]}>
          Add post
        </button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
