import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chats" element={<Chatpage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
