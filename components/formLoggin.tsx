"use client"

import styles from '@/styles/css/styles.module.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import H1 from './h1';

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
  
function FormLoggin ({imageLink}:any )  {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubMitting, setIsSubMitting] = useState(false);
  const [errors,setErrors] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("api/login", {
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
      
    
<main className='flex flex-col items-center '>
<div className="min-h-screen min-w-screen flex justify-center">
      <Image
      src={`https://media.crystallize.com/alexanderaspmannu${imageLink}`}
      alt="Picture of the author"
      width={2600}
      height={1300}
      className="min-h-screen min-w-screen "
      style={{position:'absolute'}}
      />       
               <div className={"absolute items-center top-24   "}>   <H1 >Login</H1></div>

   
        <div className={styles.login}>
     
           <form onSubmit={handleSubmit}  className={styles.login__form}>

           <div className={styles.login__inputs}>
              <div className={styles.login__box}>
              <label>email</label>

                 <input placeholder="type it here" required className={styles.login__input} type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  />
                 <i className="ri-mail-fill"></i>
              </div>

              <div className={styles.login__box}>
              <label>password</label>

                 <input type="password" placeholder="type it here" required className={styles.login__input}   
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

              <p className={styles.login__forgot}>{`Forgot Password?`}</p>
           </div>
           <div className="flex flex-col items-center">
           <button className={ `${styles.login__button} bg-blue-300 opacity[30%] disabled:bg-gray-500 py-2 rounded`} disabled={isSubMitting} type="submit" >Loggin</button>

</div>

           <div className={styles.login__register} >
           <p>{` Dont have an account?`}<Link href={'/create-user'}> Register</Link></p>  
           </div>
           </form>
     </div>
     
     </div>
    
   
     </main>
    )
}
export default FormLoggin