import axios from 'axios';
import { useRouter } from 'next/router'
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/customNavbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
export default function message({data}){
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [replyMessage, setReplyMessage] = useState('');
    const [email,setEmail]=useState("");
    useEffect(()=>{
        setEmail(sessionStorage.getItem('email'))
    },[]);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      // Additional logic to toggle dark mode
    };
    function handleClick() 
    {
  
        if ( router.back()) {
        
        } else {
            // Handle the case where there is no previous page
        }
    }


    const handleCardClick = () => {
        setShowPopup(true);
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        // Logic for handling the reply message
        console.log(replyMessage);
        setShowPopup(false);
        setReplyMessage('');
    };
    const handleClosePopup = () => {
        setShowPopup(false);
        setReplyMessage('');
      };
    
    return (
        <>
        <SessionCheck/>
        <CustomNavbar/>
        <nav className="bg-gray-700 py-4 px-6 flex items-center justify-between">
        <button className=" w-mg h-full text-white hover:text-gray-300" onClick={handleClick}>Back</button>
            <div className="text-white font-bold text-lg">Messages</div>
            <div className="flex items-center space-x-4">
                <button className="text-white hover:text-gray-300" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
        </nav>
        <ul>
            {data.map(item=>(
                <>
        {item.senderMail==email?(
        <div className="bg-teal-200 shadow-lg rounded-lg p-6 mx-2 my-4 hover:shadow-xl cursor-pointer" onClick={handleCardClick}>
        <div className="text-lg font-semibold mb-4">{item.receiverMail}</div>
        <div className="text-gray-600">{item.message}</div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Reply</h2>
                
              </div>
              <form onSubmit={handleReplySubmit}>
                <textarea
                  className="w-full h-32 resize-none border border-gray-300 rounded focus:outline-none p-2 mb-4"
                  placeholder="Type your reply..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                ></textarea>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                  type="submit"
                >
                  Send
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4  rounded focus:outline-none ml-auto"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      ):(
        <div className="bg-green-200 shadow-lg rounded-lg p-6 mx-2 my-4 hover:shadow-xl cursor-pointer" onClick={handleCardClick}>
        <div className="text-lg font-semibold mb-4">{item.senderMail}</div>
        <div className="text-gray-600">{item.message}</div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Reply</h2>
                
              </div>
              <form onSubmit={handleReplySubmit}>
                <textarea
                  className="w-full h-32 resize-none border border-gray-300 rounded focus:outline-none p-2 mb-4"
                  placeholder="Type your reply..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                ></textarea>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                  type="submit"
                >
                  Send
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4  rounded focus:outline-none ml-auto"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      )}
      </>
      
        ))}
        </ul>
        <Footer/>
        
        </>
    )
}
 
export async function getServerSideProps({query}){
    const info=query.add;
    const res=await axios.get('http://localhost:3000/citizen/mailbox?add='+info)
    let data=res.data;
    if (data==0){
        data={};
        return{props:{data}}
    }
    console.log(data)
    return{props:{data}}
}