import React, { useEffect } from 'react'
import Login from '../components/Login'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function LoginPage() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies([]);

  useEffect(() => {
    pageValidation();
  }, [cookies, navigate]);


  // Validate the page
  const pageValidation = async () => {
    if (cookies.mapscrew) {
        navigate('/')  
    }    
  };
  return (
    <div>
        <Login />
    </div>
  )
}

export default LoginPage