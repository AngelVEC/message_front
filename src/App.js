import './App.css';
import Topbar from './components/Topbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
