import React from 'react';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';
import axios from 'axios';
import { useRouter } from 'next/router';

function ScrollablePage({data}) {
    const router = useRouter();
    const  createRoute=()=>{
        router.push( '/citizen/createPost'
        );
      };
      const  backRoute=()=>{
        router.back();
      };
  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    <div className="flex justify-between p-4 bg-gradient-to-r from-yellow-100 to-green-100 border-b border-gray-300 hover:bg-gray-700">
    <button onClick={backRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-red-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Back

                    </button>
                    <button onClick={createRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-yellow-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Add Post

                    </button>
        
    </div>
         

    <div className="flex justify-center w-full bg-gradient-to-r from-yellow-100 to-green-100  ">
    
      <div className="grid grid-cols-1 flex justify-between px-2 sm:grid-cols-2 md:grid-cols-3 gap-4  rounded-lg ">
        {data.map((item)=>(
        
        <div className="flex items-center p-4 rounded-mg border-b border-gray-300 bg-gradient-to-br from-gray-500 to-green-500 hover:bg-gray-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-400"></div>
          <div className="ml-4">
            <p className="font-semibold">User</p>
            <p className="text-white font-bold">{item.caption}</p>
            <img class="h-60 w-60  rounded-tr-2xl rounded-bl-2xl mx-auto mt-8"
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

export async function getServerSideProps({query}) {
    const id=query.id;
    try{
    const res=await axios.get('http://localhost:3000/citizen/getPostById/'+id)
    const data=await res.data;
    console.log(data);
    return{props:{data}}
    }
    catch(err){
        return{props:{err}}
    }
}