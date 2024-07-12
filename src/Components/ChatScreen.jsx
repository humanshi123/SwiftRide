// ChatScreen.js
import React, { useState } from "react";
import { MessageBox, MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import ChatSidebar from "./ChatSideBar";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import UserDetails from "./UserDetails";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newMessage = {
      position: "right",
      type: message.type,
      text: message.type === "text" ? message.content : "",
      date: new Date(),
      data:
        message.type === "image" || message.type === "doc"
          ? { uri: message.content, name: message.name }
          : {},
    };
    setMessages([...messages, newMessage]);
    // Handle sending message to backend or further logic
  };

  return (
    <div className="chat-screen w-full flex">
      <ChatSidebar />
      <div className="chat-main w-[70%]">
        <ChatHeader />
        <div className="flex ">
          <div className="w-[60%] flex items-end">
            <div className="chat-messages">
              <MessageList
                className="message-list"
                lockable={true}
                toBottomHeight={"100%"}
                dataSource={messages}
              />
            </div>
            <div className="chat-input w-full">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
          <div className="user-details w-[40%] border-l  border-neutral-200">
            <UserDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
