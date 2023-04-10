import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../citizen/components/NavbarCustom'
import Slider from '../citizen/components/CustomSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>citizen Page</title>
      </Head>
      <Navbar/>
      <Slider/>
      hello
    </>
  )
}
