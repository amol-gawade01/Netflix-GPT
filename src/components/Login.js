import React from 'react'
import Header from './Header'
import { useState } from 'react'



const Login = () => {
  const [isSignIn,setisSignIn] = useState(true)
 
  const HandleSignIn = () => {
    setisSignIn(!isSignIn)
  }

  return (
    <div>
      <Header/>
      <div className='z-0 absolute'>
      <img className='brightness-50 ' src={'https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg'} alt='net-bg'></img>
      </div>
      <form className='bg-black pb-36 pt-8 px-20 z-20 flex flex-col absolute my-40 mx-[30rem] bg-opacity-75 rounded-lg'>
        <h1 className='text-white font-bold  text-2xl my-4'> {isSignIn ? "Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Name' className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input>
         }
         {!isSignIn && <input type='text' placeholder='Mobile No' className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input>
         }
        <input type='text' placeholder='Email' className='p-3 m-[0.2rem] rounded-md bg-custom-grey text-white w-[280px] border border-white'></input> 
        <input type='text' placeholder='Password' className='p-3 m-[0.2rem] rounded-md bg-custom-grey  text-white w-[280px] border border-white'></input>
        <button className='bg-red-700 text-white font-semibold  m-[0.2rem] py-3  rounded-md mt-4 w-[280px]'> {isSignIn ? "Sign In":"Sign Up"} </button>
        {isSignIn ?<p className='text-white font-semibold cursor-pointer py-4'>New to Netflix ? <span className='text-blue-500' onClick={HandleSignIn} >Sign Up</span></p>:<p className='text-white font-semibold cursor-pointer py-4'> Alreay a User ? <span className='text-blue-500' onClick={HandleSignIn} >Sign In</span></p>}
      </form>
      </div>
  )
}

export default Login