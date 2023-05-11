import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [nid, setNid] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNIDChange = (event) => {
    setNid(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const signinPage = (event) => {
    router.push("/citizen/signin")
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const info={name:name, nid:nid, phoneNumber:phoneNumber,email:email}
    try {
      const response = await axios.put('http://localhost:3000/citizen/signup', info)
      const data=await response.data;

      if(data==1){
        router.push('/citizen/signin');
        console.log(data)
      }
      if(data==0){
        
        console.log("this Account already exist")
      }

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
    // router.push({
    //   pathname:'signup',
    //   query:{name:name, nid:nid, phoneNumber:phoneNumber,email:email}
    // });
  };

  return (
   
<div className="flex flex-col justify-center items-center h-screen">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Sign Up</h1>
  <form className="w-full md:w-2/3 lg:w-1/2 max-w-lg" onSubmit={handleSubmit}>
    <div className="mb-6">
      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleNameChange}
        placeholder="Enter your name"
        required
        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="nid" className="block text-gray-700 font-medium mb-2">NID Number:</label>
      <input
        type="text"
        id="nid"
        name="nid"
        onChange={handleNIDChange}
        placeholder="Enter your NID number"
        required
        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        onChange={handlePhoneNoChange}
        placeholder="Enter your phone number"
        required
        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required
        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
    <button
      type="submit" 
      disabled={isLoading}
      className="w-full px-4 py-2 text-white font-bold bg-blue-500 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
     Sign Up
    </button>
    <button
      type="button"
      onClick={signinPage}
      disabled={isLoading}
      className="w-full px-4 py-2 text-blue-500 font-bold border border-blue-500 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed mt-4"
    >
      Sign In
    </button>
  </form>
</div>
  );
};

 export default Signup;
// export async function getServerSideProps({query}){
// const info={name:query.name,nid:query.nid,phoneNumber:query.phoneNumber,email:query.email}
// console.log(query);
// try{
//   const res=await axios.put('http://localhost:3000/citizen/signup',info);
//   const data=await res.data;
//   console.log(res.data);
//   return 0;
// }
// catch(error){
//   return {props:{data:{status:"error"}}}
// }
// }
