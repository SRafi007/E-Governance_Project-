
import axios from "axios"
import CustomNavbar from "./components/CustomNavbar";
import SessionCheck from "./components/sessionCheck";
import Footer from "./components/Footer";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";

export default function feedback({data}){
    const [showPopup, setShowPopup] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [myid, setId]=useState("");
    const router=useRouter();
    useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    },[]);
  
    const handleCardClick = () => {
      setShowPopup(true);
    };
  
    const handleSubmit = async() => {
        
        const info={feedback:feedback}
          
        try {
          const response = await axios.post('http://localhost:3000/citizen/feedback/'+myid, info)
          const data=await response.data;
          console.log(data);
          setSuccessMessage("Feedback submitted successfully!");
          setFeedback("");
          router.push('/citizen/feedback')
        }
        catch (error) {
            console.log("error22: "+error.message)
          
            setSuccessMessage("opps!..Something wrong!");
            setFeedback("");
        }
        
    };
  
    const handleClose = () => {
      setShowPopup(false);
      setSuccessMessage("");
    };
  
    
      
    return(
        <>
        <SessionCheck/>
        <CustomNavbar/>
        <div className="bg-gradient-to-r from-yellow-100 to-green-100 container max-w-full mx-auto p-4">
                
                <div className="flex justify-center">
            <div className="p-4">
                <div
                className="bg-gradient-to-r from-gray-500 to-green-500 text-white text-center p-6 rounded-lg cursor-pointer   hover:bg-blue-600"
                onClick={handleCardClick}
                >
                 <h1 className="text-2xl font-bold mb-4">Give Feedback</h1> 
                 {data.length}:-Users gave their Valuable Opinion
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex bg-gradient-to-r from-yellow-100 to-green-100 items-center justify-center">
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="bg-gradient-to-r from-gray-300 to-green-300 p-6 rounded-lg z-10 w-80">
                    <h2 className="text-lg mb-4 ">Enter Your Feedback</h2>
                    <textarea
                    className="border border-gray-400 p-2 mb-4 w-full"
                    rows="4"
                    placeholder="Enter your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                    <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2 hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    </div>
                    {successMessage && (
                    <div className="text-green-600 mt-4">{successMessage}</div>
                    )}
                </div>
                </div>
            )}
            </div>
            
                
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.map((feedback) => (
                    <div
                        key={feedback.id}
                        className="bg-gradient-to-r from-gray-200 to-green-200 text-black-b rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 hover:bg-gradient-to-r from-gary-600 hover:to-green-300"
                    >
                        <div className="flex items-center mb-4">
                        <img
                            src={'http://localhost:3000/citizen/getimage/'+feedback.photoname}
                            alt='/image/citizen/usericon.jpg'
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="font-semibold">User</span>
                        </div>
                        <p className="text-gray-800 font-bold">"{feedback.feedback}"</p>
                        <p className="text-gray-500 text-sm mt-2">{feedback.date}</p>
                    </div>
                    ))}
                </div>
                </div>
                <Footer/>
        </>
    )
}
export async function getServerSideProps({}) {
    
    const res=await axios.get('http://localhost:3000/citizen/displayFeedback')
    const data=await res.data;
    console.log(data);
    return{props:{data}}
}