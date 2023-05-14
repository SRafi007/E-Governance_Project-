import React from 'react';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';



// Define your component
const BlurryPage = () => {
  const [pass, setPass]=useState("");
  const [id, setId]=useState("");
  const router=useRouter();

  useEffect(()=>{
  setId(sessionStorage.getItem('id'));
  },[]);
  const handleCancle=async()=>{
    router.back();
  }

  const handleSubmit=async()=>{
    const password={password:pass};
    console.log(id,password);
    try {
      const response = await axios.post('http://localhost:3000/citizen/myMedicalData/'+id, password)
      if(response.data==0){

      }
        
      else{
          router.push({
          pathname:'/citizen/medicalData',
          query: { id: id}
      })
      }

    }
    catch (error) {
        console.log("error22: "+error.message)
        
    }
     
}
return (
    <div className="flex bg-gradient-to-br from-yellow-100 to-green-200 justify-center items-center h-screen bg-blur">
      <div className="bg-gradient-to-br from-gray-600  to-green-600  rounded-lg shadow-lg p-8 hover:shadow-2xl">
        <h2 className="text-xl text-white font-bold mb-4">Enter Password:</h2>
        <input
          type="password"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-800"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <div className="flex justify-center">
          <button
          onClick={handleSubmit} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded">
            Enter
          </button>
          <button 
          onClick={handleCancle}
          className="bg-gray-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlurryPage;
