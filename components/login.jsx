import React from "react";
import { useState } from "react";
const Login=()=>{
    const [det,setDet]=useState({
        email:'',
        password:'',
        cpassword:'',
    })
    const [log,setLog]=useState({
        lemail:'',
        lpassword:'',
    })
    const [pass,setPass]=useState(true);
    const [cpass,setCpass]=useState(true);
    const [sign,setSign]=useState(true);
    const wallparer="https://s3-alpha-sig.figma.com/img/7bef/2a0e/e30b0acc8d68f9cf68264bd0e5a3043a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3VLYVESh7LAN306WTnFb0TAMMOJBIw14pUX~kMN6B~wpeKTgv2aQ8M9D5U8ae4s~8tK18J7SpWXMllRHscVkjMnXU4w0Q3YWIluofenaJBKqt04XqBKXta9g~w7cv4GNXA3naJG5RCTONl1Utmwoxy~-a6n8ShCVgDbJNwaTqY2CqDV0P7NL~eR7ckqiBCPZwWbz3vLf3JfyMD~SzdrFd53OV2UUvwPrtVsykBAC-QlsA3lgnIL1ps-P5WHMRo8xV8jDAXiNCSsNgjieTNZ5370WhWBpO~5C6d4G7bb9HGbvlCfn17r4nba8ypAujYSFb0xm90F6K63LIOU~G2zYQ__"
    console.log(det)
    return(
        <div className="flex items-center justify-between">
            <div className=" h-[100vh] w-[70%] border-black mb-4 bg-no-repeat bg-cover bg-center scale-[1] " style={{ backgroundImage: `url(${wallparer})` }}>
                <p className="text-white text-left p-5 text-3xl">WELCOME TO PANDA</p>

            </div>
            <div className="flex flex-col items-center justify-center p-5 w-[30%]">
                <div className="flex items-center justify-center gap-5">
                    <button className="border border-[#F5F1ED] hover:border-b-[#A95454]" onClick={()=>{setSign(true)}}>join PANDA</button>
                    <p>or</p>
                    <button className="border border-[#F5F1ED] hover:border-b-[#A95454]" onClick={()=>{setSign(false)}}>Sign in</button>
                </div>
                {/* login and signupp logic */}
                {sign?
            <div>
            <div className="flex flex-col border border-gray-400 rounded-t-full mt-2 mb-2">
           <div className="p-3">
                <p className="mt-16 text-yellow-500 text-2xl">*</p>
                <p className="m-0 text-2xl font-medium">Create your free account</p>
                <p className="m-0 text-xl font-medium">Takes less than<span className="text-[#A95454]"> 5 minutes</span>...</p>
            </div>
            <div className="flex flex-col det">
                <input placeholder="Email Id"   onBlur={(e) => {
setDet((prevDet) => ({ ...prevDet, email: e.target.value }));
}}/>

  <div className="flex gap-2">
    <input
    placeholder="Password"
      type={pass ? 'password' : 'text'}
      onBlur={(e) => {
        setDet((prevDet) => ({ ...prevDet, password: e.target.value }));
      }}
    />
    <p className="hover:cursor-pointer text-right font-medium" onClick={() => setPass(!pass)}>{pass ? 'Hide' : 'Show'}</p>
  </div>
<div className="flex gap-2">
    <input
        placeholder="Confirm Password"
      type={cpass ? 'password' : 'text'}
      onBlur={(e) => {
        setDet((prevDet) => ({ ...prevDet, cpassword: e.target.value }));
      }}
    />
    <p className="hover:cursor-pointer text-right font-medium" onClick={() => setCpass(!cpass)}>{cpass ? 'Hide' : 'Show'}</p>
  </div>            
               

            </div>
           </div>
            <div className="flex text-left flex-col">
                <div>
                <input type="checkbox" />
                <lable className="text-base font-semibold ml-2">I’m an Expert</lable>
                </div>
                <div>
                <input type="checkbox" />
                <lable className="text-base font-semibold ml-2">I’m an Organization in Africa</lable>
                </div>
                

            </div>
            <button className="mt-7 mb-7 p-2 px-10 rounded-full border border-gray-400">Join PANDA</button>
            <div>
            <p className="m-0 text-base font-normal text-gray-400">By clicking on "Create an account", you agree to our <span className="underline">terms of use </span>and<span className="underline"> privacy policy</span>.</p>
            </div>
            </div>
            :
            <div>
                <div className="flex flex-col border border-gray-400 rounded-t-full mt-2 mb-2">
               <div className="p-3">
                    <p className="mt-16 text-yellow-500 text-2xl">*</p>
                    <p className="m-0 text-2xl font-medium">Sign In</p>
                </div>
                <div className="flex flex-col det">
                    <input placeholder="Email Id"   onBlur={(e) => {
    setDet((prevDet) => ({ ...prevDet, email: e.target.value }));
  }}/>
    
      <div className="flex gap-2">
        <input
        placeholder="Password"
          type={pass ? 'password' : 'text'}
          onBlur={(e) => {
            setDet((prevDet) => ({ ...prevDet, password: e.target.value }));
          }}
        />
        <p className="hover:cursor-pointer text-right font-medium" onClick={() => setPass(!pass)}>{pass ? 'Hide' : 'Show'}</p>
      </div>
                </div>
                <div>
                <p className="text-left mt-8 p-5 text-sm font-semibold underline">Forgot password?</p>
                </div>
               </div>
                
                <button className="mt-7 mb-7 p-2 px-10 rounded-full border border-gray-400">Sign in</button>
                </div>    
            }
                
              
                
            </div>
            
        </div>
    )
}
export default Login;