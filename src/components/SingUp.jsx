import React, { useState } from "react";
import axiox from "axios";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const navigate = useNavigate();

  const [singupInfo, setSingupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateData = (e) => {
    setSingupInfo({
      ...singupInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      singupInfo.name == "" ||
      singupInfo.email == "" ||
      singupInfo.password == ""
    ) {
      alert("Please fill out all required fields");
    } else {
      try {
        const res = await axiox.post(
          "http://localhost:8000/user/register",
          {
            ...singupInfo,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res.data.message);

        if (res.data.message == "Sucessfully Registered") {
          navigate("/");
        }
        if (res.data.message == "User Already Exist") {
          alert("User Already Exist, Please Login");
          navigate("/login");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("error: " + error);
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">SingUp</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="name"
                  value={singupInfo.name}
                  onChange={updateData}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="email"
                  value={singupInfo.email}
                  onChange={updateData}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={singupInfo.password}
                  onChange={updateData}
                  name="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/login"
              >
                Already registered?
              </a>
              <button
                onClick={submit}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Sing Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
