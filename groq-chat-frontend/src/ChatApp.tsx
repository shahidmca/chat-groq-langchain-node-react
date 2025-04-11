// src/ChatApp.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    // const userMessage: Message = { role: 'user', content: input };
    // setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/chat', {
       content: input,
      });
      // console.log("data ----", response.data.data)
      setMessages([...newMessages, { role: 'assistant', content: response.data.data.answer}]);
      // setMessages((prev) => [...prev, response.data.answer]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="border rounded p-2 h-96 overflow-y-scroll bg-gray-100">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
