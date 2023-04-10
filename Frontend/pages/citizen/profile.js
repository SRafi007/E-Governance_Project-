import axios from "axios"
import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from 'next/router'
import NavbarCustom from "./components/NavbarCustom";

export default function profile({data}){
    const router = useRouter();
    function messagePage(add){
        const mail=data[0].email;
       
        router.push({
            pathname:'/citizen/message',
            query:{add:mail}
        })
        
    };
    return(
        <>
        <NavbarCustom/>
        profile
        <ul>
          {data.map(item => (<>
            <li key={item.id}>
             <p>Name: {item.name}</p> </li>
             <li key={item.nid}> <p>NID: {item.nid}</p> </li>
             <li key={item.phoneNumber}> <p>Phone Number: {item.phoneNumber}</p> </li>
             <li key={item.email}> <p>Email: {item.email}</p> </li>
             <li ><Link href='/citizen/bio'>Bio</Link> </li>
             <li ><Link href='/citizen/printCard'>Printcard</Link> </li>
             <li ><Link href='/citizen/medicalInfo'>My medical Data</Link> </li>
             <li ><Link href='/citizen/history/?id=2'>My History</Link> </li>
             <li ><button type="button" onClick={messagePage}>Messages</button> </li>
             </>
          ))}
        </ul>
        </>
    )
}
export async  function getServerSideProps(){

    try{
    const res = await axios.get('http://localhost:3000/citizen/profile')
    const data=await res.data;
    console.log(data)
    return {props:{data}}
    }
    catch(error){
        const data={status:'This profile not found'}
        console.log(data)
        return {props:{data}}
    }
 
}