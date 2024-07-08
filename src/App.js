import './App.css';
import Topbar from './components/Topbar';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Number from './components/NumberSumUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/sumUpNum" element={<Number />} />
        <Route path="/login" element ={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
