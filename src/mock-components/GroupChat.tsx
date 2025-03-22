// src/App.js
import React, { useState, useEffect } from 'react';
import { connect } from './';

function GroupChat () {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [username, setUsername] = useState('');
    const [client, setClient] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (client) {
            return () => client.deactivate();
        }
    }, [client]);

    const onMessageReceived = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const onConnected = (client) => {
        setClient(client);
    };

    const connectToChat = () => {
        connect(onMessageReceived, onConnected);
        setIsLoggedIn(true);
    };

    const sendMessage = () => {
        if (client && input) {
            const chatMessage = { content: input, sender: username, type: 'CHAT' };
            client.publish({
                destination: '/app/chat.sendMessage',
                body: JSON.stringify(chatMessage),
            });
            setInput('');
        }
    };

    const addUser = () => {
        if (client && username) {
            const chatMessage = { sender: username, type: 'JOIN' };
            client.publish({
                destination: '/app/chat.addUser',
                body: JSON.stringify(chatMessage),
            });
        }
    };

    const handleLogin = () => {
        connectToChat();
        addUser();
    };

    if (!isLoggedIn) {
        return (
            <div>
                <h2>Enter your username to join the chat</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleLogin}>Join Chat</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Group Chat</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message.sender}: {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default GroupChat;
