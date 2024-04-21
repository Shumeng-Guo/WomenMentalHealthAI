import React, { useState } from 'react';
import './ChatBot.css'; // Ensure the correct path to your CSS file

const Chatbot = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = () => {
    const inputText = document.getElementById("input").value;
    if (!inputText.trim()) return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, isUser: true },
    ]); // Add user's message to chat
    document.getElementById("input").value = '';
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="avatar-chat">
          <img src="/images/Chatbot.png" alt="avatar" />
        </div>
        Meet Eunoia
      </div>

      <div className="chat-area">
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <textarea id="input" cols="40" rows="3" placeholder="Enter your question..."></textarea>
        <button onClick={sendMessage}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
