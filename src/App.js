import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import SingUpPage from './pages/SingUpPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/singup' element={<SingUpPage />}/>
    </Routes>    
  );
}

export default App;
