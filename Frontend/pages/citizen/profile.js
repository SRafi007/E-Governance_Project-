import axios from "axios"
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from 'next/router'
import NavbarCustom from "./components/CustomNavbar";
import SessionCheck from "./components/sessionCheck";

export default function profile({data}){
    const [id, setId]=useState("");
    const [mail,setEmail]=useState("");

    useEffect(()=>{
        setEmail(sessionStorage.getItem('email'))
    },[]);

    useEffect(()=>{
        setId(sessionStorage.getItem('id'));
        },[]);

  
    
    if(data[0].bio==null){
        data[0].bio={
        address:"Add",
        bloodGroup: "Add",
        age: "Add",
        gender: "Add",
        familyMembers: "Add",
        maritalStatus: "Add",
        jobDes: "Add",
        postoffice: "Add"
        };

    }
 

    const router = useRouter();
    const myid =data[0].id;
    const name =data[0].name;
    const phoneno =data[0].phoneNumber;
    const email =data[0].email;
    const nid =data[0].nid;

   
    function messagePage(add){
        const mail=data[0].email;
       
        router.push({
            pathname:'/citizen/message',
            query:{add:mail}
        })
        
    };

    const  printRoute=()=>{
        router.push({
          pathname: '/citizen/printCard',
          query:{id:myid}
        });
      };
      const  historyRoute=()=>{
        router.push({
          pathname: '/citizen/history',
          query:{id:myid}
        });
      };

      const  messageRoute=()=>{
        router.push({
          pathname: '/citizen/message',
          query:{add:mail}
        });
      };
      const  editProfileRoute=()=>{
        router.push({
          pathname: '/citizen/editProfile',
          query:{photo:data[0].bio.photoName,id:id}
        });
      };

      const bioRoute=()=>{
        console.log('clicked')
        router.push('/citizen/bio')
        // router.push({
        //     pathname: '/citizen/bio',
        //     query:{id:myid}
        //   });
      }


    return(
        <>
        <SessionCheck/>
        <NavbarCustom/>
            <div class="bg-gray-100">
 <div class="w-full text-white bg-main-color">
        <div x-data="{ open: false }"
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div class="p-4 flex flex-row items-center justify-between">
                <span
                    class="text-lg text-green-500  font-semibold tracking-widest uppercase rounded-tr focus:outline-none focus:shadow-outline">
                    profile</span>

                <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        <path x-show="open" fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav 
                class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                <div  class="relative" x-data="{ open: false }">
                    <button  onClick={() => window.location.href = '/citizen/medicalInfo'}
                        class="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        My Health 

                    </button>
                    <button onClick={historyRoute}
                        class="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        My History

                    </button>
                    <button onClick={messageRoute}
                        class="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Messages

                    </button>
                    <button onClick={printRoute}
                        class="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Print

                    </button>
                    
                   
                </div>
            </nav>
        </div>
    </div>
    
    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
           
            <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-white  p-3 hover:shadow">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-green-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Be Happy</span>
                    </div>
                    <div class="grid grid-cols-1">
                        <div class="text-center my-2">
                            <img class="h-60 w-60  rounded-tr-2xl rounded-bl-2xl mx-auto"
                                src={'http://localhost:3000/citizen/getimage/'+data[0].bio.photoName}
                                alt=""/>
                            
                        </div>
                        
                    </div>
                    <button onClick={editProfileRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Edit Profile

                    </button>
                </div>


               
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{name}</h1>
                    
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Age</span>
                            <span class="ml-auto">{data[0].bio.age?(data[0].bio.age):('Add')}</span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Job</span>
                            <span class="ml-auto">{data[0].bio.jobDes?(data[0].bio.jobDes):('Add')}</span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Gender</span>
                            <span class="ml-auto">{data[0].bio.gender?(data[0].bio.gender):('Add')}'({data[0].bio.bloodGroup?(data[0].bio.bloodGroup):('Add')})'</span>
                        </li>
                    </ul>
                </div>
              
                <div class="my-4"></div>
               
                
              
            </div>
           
            <div class="w-full md:w-9/12 mx-2 h-64">
              
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                        <button onClick={bioRoute}
                        class="flex flex-row text-center ml-auto space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-green-200 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Edit Bio
                    </button>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm-b">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold"> Name</div>
                                <div class="px-4 py-2">{name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">NID </div>
                                <div class="px-4 py-2">
                                {nid}
                                    </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2"><a class="text-blue-800" href="mailto:jane@example.com">{email} </a></div>
                               
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{phoneno}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">{data[0].bio.address?(data[0].bio.address):('Add')}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Family Members</div>
                                <div class="px-4 py-2">{data[0].bio.familyMembers?(data[0].bio.familyMembers):('Add')}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">marital Status</div>
                                <div class="px-4 py-2">
                                    {data[0].bio.maritalStatus?("Married"):("UnMarried")}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">jobDes</div>
                                <div class="px-4 py-2">{data[0].bio.jobDes?(data[0].bio.jobDes):('Add')}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Post Office</div>
                                <div class="px-4 py-2">{data[0].bio.postoffice?(data[0].bio.postoffice):('Add')}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div class="my-4"></div>

                
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Experience (future dev plan)</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Education (future dev plan)</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export async  function getServerSideProps({query}){
    
    const inputValue = query.id;
    console.log(inputValue);
    try{
    const res = await axios.get('http://localhost:3000/citizen/profile/'+inputValue)
    
    const data=await res.data;
    console.log(data)
    return {props:{data}}
    }
    catch(error){
        const data={status:'This profile not found'}
        console.log(data.status)
        return {
            redirect: {
                        destination: '/citizen/signin'}
        }
    }
 
}