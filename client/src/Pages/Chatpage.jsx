import { useEffect, useState } from "react";
const Chatpage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    await fetch("http://localhost:3000/api/chat")
      .then((res) => res.json())
      .then((data) => setChats(data));
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      <h1>chats</h1>
      {chats.map((chat, i) => (
        <div key={i}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
