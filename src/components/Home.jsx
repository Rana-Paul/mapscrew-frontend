import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();

  //Logout

  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data.message);

      //if logout successfull
      if (res.data.message == "Logout Successfully") {
        alert("Logout Successfully");
        removeCookie("mapscrew", { path: "/" });
        navigate("/login");
      }
    } catch (error) {
      console.log("error: " + error);
    }
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://mapscrew.com/"
            target="_blank"
            className="flex items-center"
          >
            <img
              src="https://photos.wellfound.com/startups/i/9316665-f72b1e03e401c5c3e094137e8359c227-medium_jpg.jpg?buster=1674217136"
              className="h-8 mr-3 rounded-lg"
              alt="Mapscrew Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MapsCrew
            </span>
          </a>

          <div className="bg-white border-green-300 hover:text-white hover:bg-black rounded-lg p-1">
            <button onClick={logout} className="shadow-md ">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="justify-center flex max-w-screen-xl">
        <h1 className="text-lg mt-5 text-xl">Welcome to Mapscrew</h1>
      </div>
    </div>
  );
}

export default Home;
