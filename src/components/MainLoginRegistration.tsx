import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; 
import Login from './Login';
import Registration from './Registration';
import Orders from './Orders';

const MainLoginRegistration: React.FC = () => {
  const navigate = useNavigate();

  

  return (
    <div className='loginRegistrationOrders'>
      <div className='logregblock'>         
        <button className='loginregMain' onClick={() => navigate('/registration')}>Registration</button>  
        <button className='loginregMain' onClick={() => navigate('/login')}>Login</button>
      </div>
      
      <button className='orders' onClick={() => navigate('/Orders')}>Orders</button>
      
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default MainLoginRegistration;
