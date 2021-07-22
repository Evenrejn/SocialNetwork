import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(updateNewMessageBodyCreator());
    },
    sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;