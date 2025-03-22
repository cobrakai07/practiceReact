// src/websocket.js
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const connect = (onMessageReceived, onConnected) => {
    const socket = new SockJS('http://localhost:8080/ws');
    const client = new Client({
        webSocketFactory: () => socket,
        onConnect: () => {
            console.log('Connected to WebSocket');
            client.subscribe('/topic/public', (message) => {
                onMessageReceived(JSON.parse(message.body));
            });
            onConnected(client);
        },
        onStompError: (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        },
    });

    client.activate();
    return client;
};
