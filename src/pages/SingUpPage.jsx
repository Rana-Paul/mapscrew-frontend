import React, { useEffect } from 'react'
import SingUp from '../components/SingUp'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function SingUpPage() {
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
        <SingUp />
    </div>
  )
}

export default SingUpPage