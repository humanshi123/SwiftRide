// Header.js
import React from 'react';

const ChatHeader     = () => {
  return (
    <div className="chat-header">
      <div className='flex gap-4 items-center pb-3 pl-5 border-b border-neutral-200'>
        <img src="/public/profile.png" alt="" />
        <div>
            <p className='text-gray-800 text-xs font-medium'>User 1</p>
            <p className='text-gray-500 text-xs font-normal'>online</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
