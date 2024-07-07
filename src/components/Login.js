import React, { useRef, useState } from "react";
import Header from "./Header";
import Valid from "../utilits/Valid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilits/fairebase';

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [err, setErr] = useState({});

  const email = useRef(null);
  const password = useRef(null);

  const handleEvent = () => {
    setIsSignup(!isSignup);
  };

  const handleForm = async () => {
    const msg = Valid(email.current.value, password.current.value);
    console.log(msg);
    setErr(msg);
    if (msg) return;

    if (!isSignup) {
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="bg"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="p-[50px] w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70">
        <h3 className="font-bold text-3xl py-4 text-left">{isSignup ? "Signup" : "Signin"}</h3>
        {!isSignup && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 my-4 bg-gray-700"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 my-4 bg-gray-700"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 my-4 bg-gray-700"
          ref={email}
        />
        {err.email && <p className="text-red-900 text-left">{err.email}</p>}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 rounded-md"
          ref={password}
        />
        {err.password && <p className="text-red-900 text-left">{err.password}</p>}
        <button className="w-full p-4 my-6 bg-red-700 rounded-md" onClick={handleForm}>
          {isSignup ? "Signup" : "Sign In"}
        </button>

        <p className="p-4 my-4 cursor-pointer text-left" onClick={handleEvent}>
          {isSignup ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
