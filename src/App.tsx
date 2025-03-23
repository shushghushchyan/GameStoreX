import './App.css';
import './index.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Registration from './components/Registration';
import Login from './components/Login';
import Orders from './components/Orders';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
