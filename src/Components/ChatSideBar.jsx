// Sidebar.js
import React from 'react';
import { ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

const ChatSidebar = () => {
  const chats = [
    { title: 'User 1', subtitle: 'Online', avatar: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { title: 'User 2', subtitle: 'Offline', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { title: 'User 3', subtitle: 'Online', avatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
  ];

  return (
    <div className="chat-sidebar w-[30%] border-r  border-neutral-200">
      <ChatList
        className='chat-list'
        dataSource={chats}
      />
    </div>
  );
};

export default ChatSidebar;
