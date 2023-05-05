import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../citizen/components/CustomNavbar'
import Slider2 from '../citizen/components/CustomSlider'
import Slider from '../citizen/components/HomeSlider'
import { useState,useEffect } from 'react'
import SessionCheck from './components/sessionCheck'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(sessionStorage.getItem('email'));
  }, []);
  // if (typeof window !== 'undefined') {
  //   setName(sessionStorage.getItem('email'));
  // }
  

  return (
    <>
      <Head>
        <title>citizen Page</title>
      </Head>
      <SessionCheck/>
      <Navbar/>
      
      <Slider/>
      <div class="inline-flex flex-row w-full">
  <div class="bg-teal-400 p-4 m-2">1</div>
  <div class="bg-teal-400 p-4 m-2"> 2</div>
  <div class="bg-teal-400 p-4 m-2">3</div>
  </div>
  <Slider2/>
  
  
    
    </>
  )
}
