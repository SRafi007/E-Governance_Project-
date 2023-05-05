import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

import styles from "../../styles/citizen/Signin.module.css";
import { redirect } from "next/dist/server/api-utils";



export default function signin() {
  const router = useRouter();
  const [nid, setNid] = useState("");
  const [phone, setPhone] = useState("");

  const handleNIDChange = (event) => {
    setNid(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhone(event.target.value);
  };
  const signupPage = (event) => {
    router.push("/citizen/signup")
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    // const info={nid:nid, phoneNumber:phone}
    // try{
    //   const res= axios.post('http://localhost:3000/citizen/login',info);
    //   const data= res.data();  
    //   console.log(data);
    //   return { redirect: {
    //     destination: '/citizen'}}
    
    // }catch(error){
    //   console.log("Enter valid data");
    //   return{props:{data:{status:"Enter valid information"}}}
     
    // }
    router.push({
      pathname: 'signin',
      query:{nid:nid, phoneNumber:phone}
    })

  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.loginform}>
        <h1 className={styles.logintitle}>Log in to Your Account</h1>
        <div className={styles.formgroup}>
          <label htmlFor="nid" className={styles.formlabel}>
            NID
          </label>
          <input
            type="text"
            id="nid"
            value={nid}
            onChange={handleNIDChange}
            className={styles.forminput}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="phone" className={styles.formlabel}>
            PHONE NUMBER
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneNoChange}
            className={styles.forminput}
            required
          />
        </div>
        <button type="submit" className={styles.loginbtn}>
          Log In
        </button>
        <button type="button" className={styles.signinbtn} onClick={signupPage}>
          Create Account
        </button>
        
      </form>
      
    </div>
  );
};

export async function getServerSideProps({query}){
  const info={phoneNumber:query.phoneNumber,nid:query.nid}
  
  try{
  const res=await axios.post('http://localhost:3000/citizen/login',info);
  const data=await res.data;  
  console.log(res.status);
  return{redirect: {
        destination: '/citizen'}}
 }catch(error){
  
  return{props:{data:{status:"Enter valid information"}}}
 
 }
}




