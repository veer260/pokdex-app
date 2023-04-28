import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-white">
      <div className="flex items-center p-4 transition-all duration-300 border-2 border-white cursor-pointer gap-x-2 hover:border-4 hover:rounded-2xl ">
        <FcGoogle className="text-2xl" />
        <span className="font-semibold tracking-wider uppercase ">
          Login with google
        </span>
      </div>
    </div>
  );
};

export default Login;
