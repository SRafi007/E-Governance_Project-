import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

import styles from "../../styles/citizen/Signin.module.css";
import { redirect } from "next/dist/server/api-utils";



export default function signin({data}) {
  const router = useRouter();
  const [nid, setNid] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");


  const handleNIDChange = (event) => {
    setNid(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhone(event.target.value);
  };
  const signupPage = (event) => {
    router.push("/citizen/signup")
  };

const handleSubmit = async(event) => {
    
    event.preventDefault(); 
    const info={phoneNumber:phone,nid:nid}
    try {
      const response = await axios.post('http://localhost:3000/citizen/login', info)
      const data=await response.data;

      if(data.stat==1){
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('nid', data.nid);
        sessionStorage.setItem('email', data.email);
        router.push('/citizen');
        console.log(sessionStorage.getItem('email'))
      }

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }

    
    // router.push({
    //   pathname: 'signin',
    //   query:{nid:nid, phoneNumber:phone}
    // })

  };

  return (
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-gradient-to-tl from-blue-800 to-green-500 i justify-around items-center">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">E-Governance</h1>
          <p class="text-white mt-1">Connecting citizens to their government, anytime, anywhere,
          <br/> Digitizing governance, simplifying life.</p>
          <button type="button" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          <button type="button" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" onClick={signupPage}>SignUp</button>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white" onSubmit={handleSubmit}>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">
          </h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input class="pl-2 outline-none border-none"          
            type="text"
            id="nid"
            value={nid}
            onChange={handleNIDChange}
            required 
            placeholder="NID"/>
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none"            
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneNoChange}
            required
            placeholder="Phone Number" />
          </div>
          <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
        </form>
        
      </div>
    </div>
  );
};

// export async function getServerSideProps({query}){
//   const info={phoneNumber:query.phoneNumber,nid:query.nid}
  
//   try{
//   const res=await axios.post('http://localhost:3000/citizen/login',info);
//   const data=await res.data;  
//   console.log(res.data);
//   if(res.data.stat==1){

//     sessionStorage.setItem('key',res.data.stat)
  
//     return{redirect: {
//         destination: '/citizen'}}
//   }
//   else{
    
//     return{props:{data:{error:"Enter valid information",nid:'',phone:''}}}
//   }
  
//  }catch(error){
  
//   return{props:{data:{error:"Enter valid information",nid:'',phone:''}}}
 
//  }
// }




