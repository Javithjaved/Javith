import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/Loginpage';
import 'bootstrap/dist/css/bootstrap.css';
import DashBorad from "../src/componets/DashBorad.jsx";
const App = () => {
  
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashBorad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
