import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s["dialogs__current-chat-msg"]}>
      <div className={s["dialogs__current-chat-wrap"]}>
        <img
          src="http://placehold.it/40x40/"
          alt="A"
          className={s["dialogs__current-chat-msg-img"]}
        />
        <p className={s["dialogs__current-chat-msg-name"]}>{props.name}</p>
      </div>
      <p className={s["dialog__current-chat-msg-text"]}>{props.message}</p>
    </div>
  );
};

export default Message;
