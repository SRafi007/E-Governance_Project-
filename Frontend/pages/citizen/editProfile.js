import React, { useState ,useEffect} from 'react';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';
import { useRouter } from 'next/router';
import axios from 'axios';

function EditProfilePage({data}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const router =useRouter();
  const [myid, setId]=useState("");
  const [nid, setNid]=useState("");
  useEffect(()=>{
  setId(sessionStorage.getItem('id'));
  setNid(sessionStorage.getItem('nid'));
  },[]);

  console.log(data);
  const handleSubmit = async(e) => {
    // Handle form submission
    e.preventDefault();
    
    const info={
        name:name,
        nid:nid,
        phoneNumber:phoneNumber,
        email:email,}
      

      
    try {
       const response = await axios.put('http://localhost:3000/citizen/update/'+myid, info)
      const data=await response.data;
      console.log(data);
      setSuccess(true);
    }
    catch (error) {
        console.log("error22: "+error.message)
      
        setSuccess(false);
    }
    setSuccess(true);
  };

  const handleBack = () => {
    router.back();
    // Handle going back
  };

  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    <div className="flex flex-col items-center bg-gradient-to-tr from-gray-500 to-green-500 justify-center h-screen">
      <div className="mb-8">
        <img
          className="w-32 h-32 rounded-full"
          src={'http://localhost:3000/citizen/getimage/'+data}
          alt="Profile Picture"
        />
      </div>
      <div className="w-64">
        <input
          className="w-full mb-4 px-4 py-2 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded"
          type="text"
          placeholder="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
      {success && <p className="mt-4 text-white">Profile updated successfully!</p>}
    </div>
    </>
  );
}

export default EditProfilePage;

export async  function getServerSideProps({query}){
    const data=query.photo;
    console.log(data)
    return {props:{data}}

 
}
