import React, { useRef, useState } from "react";
import Header from "./Header";
import Valid from "../utilits/Valid";

const Login = () => {
  const [isSingup, setIsSingup] = useState(true);
  const [err,setErr]=useState({})

  const email=useRef(null)
  const password=useRef(null)
  const handelevent = () => {
    setIsSingup(!isSingup);
  };
  const handelform=()=>{
   const msg= Valid(email.current.value,password.current.value)
   console.log(msg)
   setErr(msg)

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="bg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=" p-[50px] w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white  rounded-xl bg-opacity-70">
        <h3 className="font-bold text-xl py-4">{isSingup ? "singup" : "singin"}</h3>
        {isSingup ? (
          ""
        ) : (
          <>
           <input
            type="text"
            placeholder="firstname"
            className="w-full p-4 my-4 bg-gray-700"
          />
          <input
          type="text"
          placeholder="secondname"
          className="w-full p-4 my-4 bg-gray-700"
        />
          </>
         
        )}
        <input
          type="text"
          placeholder="email"
          className="w-full p-4 my-4 bg-gray-700"
          ref={email}
        />
        {err.email&&<p className="text-red-900">{err.email}</p>}
        <input
          type="password"
          placeholder="password"
          className="w-full p-4 my-4  bg-gray-700"
          ref={password}
        />
         {err.password &&<p className="text-red-900">{err.password}</p>}
        <button className="w-full p-4 my-6 bg-red-700" onClick={handelform}>
          {isSingup ? "singup" : "sing in"}
        </button>
        
        <p className="p-4 my-4 cursor-pointer" onClick={handelevent}>
          {isSingup?"new to netflix? sing up now":"am allredy rigested"}
        </p>
      </form>
    </div>
  );
};

export default Login;
