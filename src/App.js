import './App.css';
import Topbar from './components/Topbar';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Number from './components/NumberSumUp';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import CreateChatroom from "./components/CreateChatroom";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/sumUpNum" element={<Number />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
        <Route path="/logout" element ={<Logout />} />
          <Route path="/createChatroom" element ={<CreateChatroom />} />
      </Routes>
    </div>
  );
}

export default App;
