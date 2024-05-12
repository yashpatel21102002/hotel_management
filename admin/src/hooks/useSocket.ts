import { useEffect, useState } from "react";

const WS_URL = "ws://localhost:8080";

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            setSocket(ws);
            // Send initial data to the server upon connection
            const initialData = {
                type: "admin", // or "customer" depending on the user type
                userType: "admin", // or "customer"
                hotelId: "hotel_1", // Replace with actual hotel ID
                tableId: "table_1000", // Replace with actual table ID
            };

            ws.send(JSON.stringify(initialData));
        }

        ws.onclose = () => {
            console.log("disconnected")
            setSocket(null);
        }

    }, [])

    return socket;
}