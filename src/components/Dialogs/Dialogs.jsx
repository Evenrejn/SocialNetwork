import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let send = React.createRef();

  let sendMsg = () => {
    let text = send.current.value;
    alert("srgfffg");
  };

  return (
    <div className={s["main-content"]}>
      <h2 className={s.dialogs}>Dialogs</h2>
      <div className={s["wrapper-dialog"]}>
        <ul className={s["dialogs__name"]}>{dialogsElement}</ul>
        <div className={s["dialogs__current-chat"]}>{messagesElements}</div>
      </div>
      <div className={s["main-content__msg"]}>
        <input
          ref={send}
          className={s["main-content__posts-input"]}
          type="text"
          placeholder="your news..."
        />
        <button onClick={sendMsg} className={s["main-content__send-post"]}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
