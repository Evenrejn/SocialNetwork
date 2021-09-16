import React, {PureComponent} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Enter your post text"
        validate={[required, maxLength10]}
      />
      {/* <button onClick={onAddPost} className={s["main-content__send-post"]}> */}
      <button>Add post</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

class MyPosts extends PureComponent {

  render() {
    let postsElements = [...this.props.posts].reverse().map((p) => (
      <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
      this.props.addPost(values.newPostText);
    };

    return (
      <div>
        <div className={s["main-content__posts"]}>
          <p className={s["main-content__posts__my-posts"]}>My posts</p>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
        {postsElements}
      </div>
    );
  }
};

export default MyPosts;
