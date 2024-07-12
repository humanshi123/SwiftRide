// ChatInput.js
import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import { GalleryIcon, PinIcon } from './SvgIcons';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.native);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onSendMessage({ type: 'image', content: URL.createObjectURL(file) });
    }
  };

  const handleDocUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onSendMessage({ type: 'doc', content: URL.createObjectURL(file), name: file.name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage({ type: 'text', content: message });
      setMessage('');
    }
  };

  return (
    <div className="chat-input-container">
      {showEmojiPicker && (
        <Picker onSelect={handleEmojiSelect} />
      )}
      <form className="flex items-center border-t border-neutral-200 chat-input-form px-3" onSubmit={handleSubmit}>
        <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          😊
        </button>
        <input
        className='w-[80%] mx-2'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="imageUpload"
          onChange={handleImageUpload}
        />

            <button>
            <GalleryIcon />
            </button>
          <button type="button"> <PinIcon />  </button>

        {/* <button type="submit">Send</button> */}
      </form>
    </div>
  );
};

export default ChatInput;
