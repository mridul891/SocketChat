import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
};

export default App;
