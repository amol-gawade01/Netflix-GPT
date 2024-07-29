import React, { useState, useRef } from 'react';
import Header from './Header';
import { ValidateData } from '../utils/ValidateData';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../utils/firebase"

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  
  const email = useRef(null);
  const pass = useRef(null);

  const HandleSignIn = () => {
    setisSignIn(!isSignIn);
  }

  const handleData = () => {
    const ValidData = ValidateData(email.current.value, pass.current.value);
    seterrorMessage(ValidData);
    if(ValidData) return;

    if(!isSignIn){
      // Sign up

      createUserWithEmailAndPassword(auth,email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" - "+errorMessage)
    // ..
  });

    }else{
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" - "+errorMessage)
  });

    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <Header/>
      <div className='z-0 absolute'>
        <img className='brightness-50 ' src={'https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg'} alt='net-bg'></img>
      </div>
      <form onSubmit={(e) => {e.preventDefault()}} className='bg-black pb-36 pt-8 px-20 z-20 flex flex-col absolute my-40 mx-[30rem] bg-opacity-75 rounded-lg'>
        <h1 className='text-white font-bold text-2xl my-4'> {isSignIn ? "Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Name' className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input>}
        {!isSignIn && <input type='text' placeholder='Mobile No' className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input>}
        <input type='text' placeholder='Email' ref={email} className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input> 
        <div className='relative'>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='Password' 
            ref={pass} 
            className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'
          />
          <button 
            type='button' 
            onClick={toggleShowPassword} 
            className='absolute inset-y-0 right-0 px-3 text-white'
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className='mt-1 font-bold text-red-600 mr-2'>{errorMessage}</p>
        <button className='bg-red-700 text-white font-semibold m-[0.2rem] py-3 rounded-md mt-4 w-[280px]' onClick={handleData}> 
          {isSignIn ? "Sign In" : "Sign Up"} 
        </button>
        {isSignIn ? (
          <p className='text-white font-semibold cursor-pointer py-4'>
            New to Netflix? <span className='text-blue-500' onClick={HandleSignIn}>Sign Up</span>
          </p>
        ) : (
          <p className='text-white font-semibold cursor-pointer py-4'>
            Already a User? <span className='text-blue-500' onClick={HandleSignIn}>Sign In</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
