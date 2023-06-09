import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../citizen/components/CustomNavbar'
import Slider2 from '../citizen/components/CustomSlider'
import Slider from '../citizen/components/HomeSlider'
import { useState,useEffect } from 'react'
import SessionCheck from './components/sessionCheck'
import Footer from './components/Footer'
import BlogCard from './components/BlogCard'




const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(sessionStorage.getItem('email'));
  }, []);
  // if (typeof window !== 'undefined') {
  //   setName(sessionStorage.getItem('email'));
  // }
  const images = [
    '/image/citizen/banner2.png',
    '/image/citizen/banner1.png',
    'https://www.daily-sun.com/assets/news_images/2016/07/07/Community-Health.jpg',
  ];
  

  return (
    <>
    <div className="bg-gray-300">
      <Head>
        <title>citizen Page</title>
      </Head>
      <SessionCheck/>
      <Navbar/>
      
      <Slider/>
      
  <Slider2  images={images}/>
  
  <BlogCard/>

  
  <Footer/>
  </div>
    
    </>
  )
}
