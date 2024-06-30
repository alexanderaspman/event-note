"use client"

import styles from '@/styles/css/styles.module.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import H1 from './h1';

type HTMLFormEvent ={
    password:string
    email?: string;
    name?: string;
    title?: string;
    body?: string;
  }
  type Token ={token:string}
  type T = {
    
   data:   Token[]|null}
  const imageLoader = ({ src}:any) => {
    https://media.crystallize.com/alexanderaspmannu/24/4/9/2/designer-8.png
    return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu${src}`
  }
  
function FormCreateUser  ({imageLink}:any )  {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubMitting, setIsSubMitting] = useState(false);
  const [errors,setErrors] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubMitting(true)
    if (password !== confirmPassword){
      setIsSubMitting(false)
      return;
    }
    const response = await fetch("api/create-user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:username, password }),
    });
    setIsSubMitting(false)
    if (response.ok) {
      router.push('/dashboard');
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
              <div className={"absolute top-24   text-right  "}>   <H1 >Create a account</H1></div>

   
        <div className={styles.login}>

          
           <form  onSubmit={handleSubmit}  className={styles.login__form}>
            <div>
{
  errors.length > 0 && (<ul>{errors.map((error)=>(<li key={error} className="bg-red-100 text-red-500 px-4 py-2 rounded">{error}</li>))}</ul>)
}</div>
           <div className={styles.login__inputs}>
              <div className={styles.login__box}>
                <label className={styles.label}>Email:</label>
                 <input placeholder="Type here..." required className={styles.login__input} type="text"
              value={username}
              
              maxLength={50}
              onChange={(e) => setUsername(e.target.value)}  />
                 <i className="ri-mail-fill"></i>
              </div>

              <div className={styles.login__box}>
              <label className={styles.label}>Password:</label>

                 <input type="password" placeholder="Type here..." required className={styles.login__input}   
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
                 <i className={styles.ri_lock_2_fill}></i>
              </div>
              <div className={styles.login__box}>
              <label className={styles.label}>Password:</label>

                 <input type="password" placeholder="Confirme password..." required className={styles.login__input}   
              value={confirmPassword}
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)} />
                 <i className={styles.ri_lock_2_fill}></i>
              </div>
           </div>

           <div className={styles.login__check}>
              <div className={styles.login__check_box}>
                 <input type="checkbox" className={styles.login__check_input} id="user-check"               minLength={8}
                 />
                 <label  className={styles.login__check_label}>Remember me</label>
              </div>

             
           </div>
           <div className="flex flex-col items-center">
<button className={ `${styles.login__button} bg-blue-300 disabled:bg-gray-500 py-2 rounded`}  type="submit" >Create user</button>
</div>

           <div className={styles.login__register} >
           <p>{` Already have an acount?`} <Link href={'/login'}>Signin</Link></p>  
           </div>
           </form>
     </div>
     
     </div>
    
   
     </main>
    )
}
export default FormCreateUser