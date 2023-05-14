import { useState } from 'react';
import axios from 'axios';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import SessionCheck from './components/sessionCheck';
import { Router, useRouter } from 'next/router';


const Card = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router=useRouter();

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRemove = async(id) => {
    console.log(id);
    
        try {
          const response = await axios.get('http://localhost:3000/citizen/deleteMedicalData/'+id)
          const data=await response.data;
          console.log(data);
        }
        catch (error) {
            console.log("error22: "+error.message)
        }

  };
  const addmedicalinfoRoute=()=>{
    router.push('/citizen/addMedicalData')
  }

  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    
    <div className="flex flex-col bg-gradient-to-br from-gray-200 to-green-300 items-center w-full h-full mb-6 p-4">
      <div> <button onClick={addmedicalinfoRoute}
                        class="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                       Add New

                    </button></div>
        {data.map((item,i) => (
        <div className=" w-full p-4">
    
      <div className="bg-gradient-to-br from-gray-600 to-green-500 text-center rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl">
        <div className="flex p-4">
          <div className="w-8 h-8 bg-green-200 rounded-full mr-4 font-semibold">{i+1}</div>
          <div>
            <h3 className="text-xl font-semibold text-white">{item.issue}</h3>
            <p className="text-white">{item.addedTime}</p>
          </div>
        </div>
        <div className="px-6 py-4 text-white">
          <p>{item.des}</p>
        </div>
        <div className="bg-gradient-to-br from-gray-600 to-green-700 px-6 py-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">{item.status}</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            onClick={handlePopup}
          >
            View Reply
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() =>handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed z-10 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Doctor's Reply</h3>
              <p className="text-gray-700">{'doctorsReply'}</p>
            </div>
            <div className="px-4 py-3 bg-gray-100 text-right">
              <button
                className="text-blue-500 hover:text-blue-700 font-bold"
                onClick={handlePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      ))}
    </div>
    <Footer/>
    
    </>
  );
};

export default Card;
  
  


export async function getServerSideProps({query}){
    //const router=useRouter();
    const id = query.id;
    try {
        const response = await axios.get('http://localhost:3000/citizen/myMedicalDataById/'+id)
        const data=await response.data;

      return{props:{data}}
      //   if (dataLength > 0){
        
      //   return{props:{data}}}
      //   else{
      //     //router.push('/citizen');
      //   }
       }
  
      catch (error) {
          console.log("error22: "+error.message)
          return{props:{ error: error.message }}
      }
    //return{props:{query}}

}
