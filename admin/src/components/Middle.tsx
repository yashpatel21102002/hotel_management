import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const WebSocketComponent: React.FC = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [foodItems, setFoodItems] = useState<
    { title: string; imagelink: string; price: number; quantity: number }[]
  >([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080"); // Replace with your WebSocket server URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
      setWs(socket);

      // Upon connection, send a message to identify as admin
      socket.send(
        JSON.stringify({
          type: "admin",
          userType: "admin",
          hotelId: "hotel1",
          tableId: "table1",
        })
      );
    };

    socket.onmessage = (event) => {
      try {
        const receivedMessage = JSON.parse(event.data);
        if (receivedMessage.type === "chat") {
          setFoodItems((prevData) => [
            ...prevData,
            receivedMessage.message.foodItems,
          ]);
          console.log(foodItems)
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      setWs(null);
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []); // Run only once on component mount

  return (
    <div className="w-3/5 ">
      <h1>Food Items</h1>
      <ul className="grid grid-cols-3 gap-3">
        {foodItems.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
