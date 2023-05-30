import React, { useState } from "react";
import axiox from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const updateData = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  //Login
  const submit = async (e) => {
    e.preventDefault();
    if (
      loginInfo.name == "" ||
      loginInfo.email == "" ||
      loginInfo.password == ""
    ) {
      alert("Please fill out all required fields");
    } 
    else {

      try {
        // API call
        const res = await axiox.post(
          "http://localhost:8000/user/login",
          {
            ...loginInfo,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res.data.message);
          
        //if Login successfull
        if (res.data.message == "Invalid Login  Details") {
          alert("Invalid Login Detals");
        }
        //if User Doesn't Exis
        if (res.data.message == "User Doesn't Exist") {
          alert("User Doesn't Exist, Please Register");
          navigate("/singup");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("error: " + error);
      }

    }
    
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              name="email"
              value={loginInfo.email}
              onChange={updateData}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              value={loginInfo.password}
              onChange={updateData}
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              onClick={submit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{"  "}
          <a
            href="/singup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
