import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/auth/HomePage';
import Register from './pages/auth/Register';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
