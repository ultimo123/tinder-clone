import React from "react";
import "./Chats.css";
import Chat from "./Chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you?"
        timestamp="35 minutes ago"
        profilePic="https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24"
      />
      <Chat
        name="Ellen"
        message="Hey! How are you?"
        timestamp="55 minutes ago"
        profilePic="https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24"
      />
      <Chat
        name="Sandra"
        message="Hey! How are you?"
        timestamp="3 days ago"
        profilePic="https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24"
      />
      <Chat
        name="Natasha"
        message="Hey! How are you?"
        timestamp="1 week ago"
        profilePic="https://www1.asc.upenn.edu/sites/default/files/styles/bio_landing_photo_688x377px/public/Sarah%20Jackson%20770_0.jpg?itok=BFYgxk24"
      />
    </div>
  );
};

export default Chats;
