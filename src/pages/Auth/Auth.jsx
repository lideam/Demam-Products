import "./Login.css";
import Makeup from "../../assets/cos.png";
import { Login } from "./Login";
import { Register } from "./Register";
import { useState } from "react";
import {Link} from "react-router-dom"

export const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div
          className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
          <div className="absolute triangle min-h-screen right-0 w-16"></div>

          <img
            src={Makeup}
            className="h-96 absolute right-5 mr-5"
            alt="Skullcandy"
          />
          <div className="w-full max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Welcome to Your Beauty Hub
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              Discover the latest in beauty trends and skincare. Log in to
              explore personalized tips, expert advice, and a range of top-tier
              products designed for your unique needs.
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Link to='/' className="absolute left-1/2 top-12 font-bold text-2xl bg-blue-700 text-white p-4 rounded-lg">
          Bella Cosmo
        </Link>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                {login ? "Welcome Back!" : "Hey There!"}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {login ? "Please sign in to your account" : "Create new account"}
              </p>
            </div>
            <div className="">{login ? <Login /> : <Register />}</div>

            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>{login ? "Don't have an account?" : "Already have an account?"}</span>
              <a
                onClick={() => setLogin(!login)}
                class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign {login ? "up" : "in"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
