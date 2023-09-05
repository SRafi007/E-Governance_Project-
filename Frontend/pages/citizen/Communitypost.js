import React from 'react';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';

function ScrollablePage({data}) {
    const router = useRouter();
    const [myid, setId]=useState("");
    
    useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    },[]);
    const  createRoute=()=>{
        router.push( '/citizen/createPost'
        );
      };
      const  myPostRoute=()=>{
        router.push({ 
            pathname:'/citizen/mypost',
        query:{id:myid}
    }

        );
      };
  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    <div className="flex justify-between p-4 bg-gradient-to-r from-yellow-100 to-green-100 border-b border-gray-300 hover:bg-gray-700">
    <button onClick={myPostRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        My Post

                    </button>
                    <button onClick={createRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-yellow-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Add Post

                    </button>
        
    </div>
         

    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-100 to-green-100  h-screen">
    
      <div className="w-120 h-full overflow-y-scroll border border-gray-300 rounded bg-gradient-to-br from-gray-500 to-green-500">
        {data.map((item)=>(
        
        <div className="flex items-center p-4 border-b border-gray-300 hover:bg-gray-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-400"></div>
          <div className="ml-4">
            <p className="font-semibold">User</p>
            <p className="text-white font-bold">{item.caption}</p>
            <img class="h-60 w-60  rounded-tr-2xl rounded-bl-2xl mx-auto"
                                src={'http://localhost:3000/citizen/getpostimage/'+item.photoName}
                                alt=""/>
          </div>
        </div>  
        ))}     
      </div>
    </div>
    </>
  );
}

export default ScrollablePage;

export async function getServerSideProps() {
    
    const res=await axios.get('http://localhost:3000/citizen/getPost')
    const data=await res.data;
    console.log(data);
    return{props:{data}}
}