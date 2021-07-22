import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody; //

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s["main-content"]}>
      <h2 className={s.dialogs}>Dialogs</h2>
      <div className={s["wrapper-dialog"]}>
        <ul className={s["dialogs__name"]}>{dialogsElement}</ul>
        <div className={s["dialogs__current-chat"]}>{messagesElements}</div>
      </div>
      <div className={s["main-content__msg"]}>
        {/* <input
          ref={send}
          className={s["main-content__posts-input"]}
          type="text"
          placeholder="your news..."
        /> */}
        <div className={s["main-content__posts-input"]}>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="main-content__send-post">
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        {/* <button onClick={sendMsg} className={s["main-content__send-post"]}> */}
        {/* Send
        </button> */}
      </div>
    </div>
  );
};

export default Dialogs;
