import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24",
      message: "Whats up",
    },
    {
      message: "Whats up",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              src={message.image}
              alt={message.name}
              className="chatScreen__image"
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          placeholder="Type a Message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
