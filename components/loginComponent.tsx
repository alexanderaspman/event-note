"use client"

import styles from '@/styles/css/styles.module.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
    password:string
    email?: string;
    name?: string;
    title?: string;
    body?: string;
  }
  interface Token {token:string}
  type T = {
    
   data:   Token[]|null}
  const imageLoader = ({ src}:any) => {
    https://media.crystallize.com/alexanderaspmannu/24/4/9/2/designer-8.png
    return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu${src}`
  }
  
function LoginComponent ({imageLink}:any )  {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:username, password }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      alert('Login failed');
    }
  }; 
    return(
      
    
<main>
      <div className="min-h-screen min-w-screen flex justify-center">
      <Image
      src={`https://media.crystallize.com/alexanderaspmannu${imageLink}`}
      alt="Picture of the author"
      width={2600}
      height={1300}
      className="min-h-screen min-w-screen "
      style={{position:'absolute'}}
      />       
         
   
        <div className={styles.login}>
     
           <h1 className={styles.login__title}>Login</h1>
           <form onSubmit={handleSubmit}  className={styles.login__form}>

           <div className={styles.login__inputs}>
              <div className={styles.login__box}>
                 <input placeholder="Email ID" required className={styles.login__input} type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  />
                 <i className="ri-mail-fill"></i>
              </div>

              <div className={styles.login__box}>
                 <input type="password" placeholder="Password" required className={styles.login__input}   
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
                 <i className={styles.ri_lock_2_fill}></i>
              </div>
           </div>

           <div className={styles.login__check}>
              <div className={styles.login__check_box}>
                 <input type="checkbox" className={styles.login__check_input} id="user-check"/>
                 <label  className={styles.login__check_label}>Remember me</label>
              </div>

              <a href="#" className={styles.login__forgot}>Forgot Password?</a>
           </div>

<button  className={styles.login__button} type="submit">Login</button>

           <div className={styles.login__register} >
           <p> Dont have an account?<Link href={'/create-user'}> <a href="/create-user">Register</a></Link></p>  
           </div>
           </form>
     </div>
     
     </div>
    
   
     </main>
    )
}
export default LoginComponent