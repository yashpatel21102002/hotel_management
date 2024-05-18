import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import cors from 'cors';
import foodRouter from './routes/food.js';
import hotelRouter from './routes/hotel.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use("/api/food/", foodRouter);
app.use("/api/hotel/", hotelRouter);
const server = app.listen(8080, () => {
    console.log("App is listening on port 8080");
});

const wss = new WebSocketServer({ server });

// Users will be stored here
let users = {};

const sendTo = (connection, message) => {
    connection.send(JSON.stringify(message));
};

wss.on("connection", (ws) => {
    ws.on("message", (msg) => {
        let data;

        // Accepting only JSON messages
        try {
            data = JSON.parse(msg);
        } catch (e) {
            console.log("Invalid JSON");
            data = {};
        }

        const { type, userType, hotelId, tableId, recipientId, message } = data;

        // Handle message by type
        switch (type) {
            // When a user tries to login
            case "admin":
            case "customer":
                // Check if username is available
                if (users[tableId]) {
                    sendTo(ws, {
                        message: "Username is already in use.",
                        id: tableId
                    });
                } else {
                    // Store user information
                    const newId = uuidv4(); // Generate a unique ID for the user
                    users[newId] = {
                        userType,
                        hotelId,
                        tableId,
                        ws // Store the WebSocket connection
                    };

                    sendTo(ws, {
                        message: "Connection established for user with ID: " + newId,
                        tableId: newId
                    });
                }
                break;

            case "chat":
                // Check if user to send offer to exists
                const sender = users[tableId];

                if (sender && users[recipientId]) {
                    const recipientSocket = users[recipientId].ws;

                    // Send the message to the recipient
                    sendTo(recipientSocket, {
                        type: "chat",
                        senderId: tableId,
                        message: message
                    });

                    // Send confirmation message to the sender
                    sendTo(ws, {
                        message: "Message sent to " + recipientId
                    });
                } else {
                    // Send error message if recipient is not found
                    sendTo(ws, {
                        message: "Recipient " + recipientId + " is not connected."
                    });
                }
                break;
        }
    });

    // Cleanup on WebSocket close
    ws.on("close", () => {
        const userId = Object.keys(users).find(key => users[key].ws === ws);
        if (userId) {
            delete users[userId];
            console.log("User disconnected:", userId);
        }
    });
});
