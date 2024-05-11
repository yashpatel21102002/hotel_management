import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import cors from 'cors';
import  foodRouter  from './routes/food.js';

const app = express();
app.use(cors())
app.use("/api", foodRouter);
const server = app.listen(8080, () => {
    console.log("App is listening on port 8080");
});

const wss = new WebSocketServer({ server });

// Map to store rooms (hotels)
const rooms = new Map();

// Define a counter for assigning user IDs
let userIdCounter = 1;

wss.on('connection', (ws) => {
    console.log('Client connected.');

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
        console.log('Client disconnected.');
    });

    ws.on('message', (message, isBinary) => {
        const data = JSON.parse(message);
        console.log('Message received:', message);
        // Setting the rooms map
        if (data.type === "admin") {
            console.log('Admin joined room:', data.roomId);
            rooms.set(data.roomId, { admin: ws, customer: null, id: userIdCounter++ });
        }
        if (data.type === "customer") {
            console.log('Customer joined room:', data.roomId);
            rooms.set(data.roomId, { admin: null, customer: ws, id: userIdCounter++ });
        }

        // Now if the type is chat then...
        if (data.type === "chat") {
            const room = rooms.get(data.roomId);

            if (room) {
                if (room.admin === ws && room.id === 1) {
                    console.log('Admin broadcasting message to all users in the room.');
                    // Type 1: Admin broadcasting message to all users in the room
                    rooms.forEach((roomObj) => {
                        if (roomObj.customer && roomObj.customer.readyState === WebSocket.OPEN) {
                            roomObj.customer.send(`Admin (broadcast) says: ${data.message}`);
                        }
                    });
                } else if (room.admin === ws && room.id !== null) {
                    console.log('Admin sending message to specific user.');
                    // Type 2: Admin sending message to specific user
                    const userRoom = Array.from(rooms.values()).find((roomObj) => roomObj.id === room.id && roomObj.customer !== null);
                    if (userRoom && userRoom.customer && userRoom.customer.readyState === WebSocket.OPEN) {
                        userRoom.customer.send(`Admin says: ${data.message}`);
                    }
                } else if (room.customer === ws) {
                    console.log('Customer sending message to admin.');
                    // Type 3: Customer sending message to admin
                    if (room.admin && room.admin.readyState === WebSocket.OPEN) {
                        room.admin.send(`Customer (ID: ${room.id}) says: ${data.message}`);
                    }
                }
            }
        }
    });
});
