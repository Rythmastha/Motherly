import React, { useState } from "react";
import Image from "../assets/Mom.png";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate(); // Import useHistory from react-router-dom

  const handleSubmit = () => {
    if (username.trim() === "" || password.trim() === "") {
      setSubmitted(true);
    } else {
      // Reset submitted state
      setSubmitted(false);
      // Perform login action or redirection
      console.log("Logging in...");
      history("/user"); // Redirect to "/user" after successful login
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-[#FFF2F2] h-full">
        <div className="flex-1 flex justify-center items-center">
          <img className="w-2/3 transition-transform transform hover:scale-105" src={Image} alt="" />
        </div>
        <div className="flex-1 bg-white mx-64 my-40 flex-cols border-2 border-pink-300 transition-transform transform hover:scale-105">
          <div className="px-16 pt-16 text-4xl font-bold">Login</div>
          <div className="px-16 pt-16 font-bold">
            Enter Username or Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2 transition duration-200 ease-in-out transform hover:border-pink-500 focus:border-pink-500"
              id="username"
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="px-16 pt-4 font-bold">
            Enter Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2 transition duration-200 ease-in-out transform hover:border-pink-500 focus:border-pink-500"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {submitted && (username.trim() === "" || password.trim() === "") && (
            <div className="px-16 pt-2 text-red-600">
              Please fill all fields
            </div>
          )}
          <div className="flex flex-rows gap-x-4 px-16 py-16">
            <div className="flex-1">
              <Link to="/signup">
                <button className="bg-[#FF9999] py-1 border-2 border-white w-full rounded-full transition-transform transform hover:scale-105 hover:bg-[#FFB3B3]">
                  Signup
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <button
                className="border-2 border-black py-1 w-full rounded-full transition-transform transform hover:scale-105 hover:bg-gray-200"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
