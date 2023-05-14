import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/customNavbar';

export default function Bio({data}) {
  const [issue, setIssue] = useState('');
  const [des, setDes] = useState('');
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  
  const router = useRouter();
  function handleClick() {
    
    if ( router.back()) {
     
    } else {
      // Handle the case where there is no previous page
    }
  }

  useEffect(()=>{
  setId(sessionStorage.getItem('id'));
  },[]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const info={
      password:password,
      issue:issue,
      des:des,
      status:status,}
      

      
    try {
       const response = await axios.post('http://localhost:3000/citizen/medicalData/'+id, info)
      const data=await response.data;
      console.log(data);
      setIsSuccess(true);
    }
    catch (error) {
        console.log("error22: "+error.message)
      
      setIsSuccess(false);
    }
    
  }

  return (
    <>
      <SessionCheck />
      <CustomNavbar />
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 px-90 md:px-80 pt-6 pb-8 mb-4  justify-center">
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-gray-900 to-gray-700 max-w-screen-mg shadow-md rounded px-10 md:px-10 pt-6 pb-8 mb-4">
          
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="issue">
              Issue
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="issue"
              value={issue}
              placeholder="Issue"
              onChange={(e) => setIssue(e.target.value)}
            >
              <option value="">Select your issue</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Radiology">Radiology</option>
              
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="des">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="des"
              type="text"
              placeholder="Enter your Description"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select your Status</option>
              <option value="Emergency">Emergency</option>
              <option value="Normal">Normal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-white hover:bg-gray-100 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <button
              onClick={handleClick}
              className="bg-white hover:bg-gray-100 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Back
            </button>
            {isSuccess && (
              <p className="text-white font-bold">Data saved successfully!</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
            }


