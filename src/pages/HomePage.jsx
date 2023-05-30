import React, { useEffect } from "react";
import Home from "../components/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie"

function HomePage() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies([]);

  useEffect(() => {
    pageValidation();
  }, [cookies, navigate]);

  // Validate the page
  const pageValidation = async () => {
    if (!cookies.mapscrew) {
        navigate('/login')  
    }
    else {
      const res = await axios.post("http://localhost:8000/home",{},{withCredentials: true});
      if (res.data.message == "User is Unauthorized") {
        removeCookie("mapscrew", { path: "/" });
        navigate('/login')
      }

    }

    
  };

  return (
    <div>
      <Home />
    </div>
  );
}

export default HomePage;
