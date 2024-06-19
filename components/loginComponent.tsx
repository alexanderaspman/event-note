"use client"

import styles from '@/styles/css/styles.module.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import NotesPage from '@/app/notes/[category]/page';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import { handleLoginUser } from '@/handlers/api';

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
  
function LoginComponent<getServerSideProps>  ({imageLink}:any )  {
  const [itemTokenFromLocalStorage,setItemTokenFromLocalStorage] = useState()

  const [token, setToken] = useState<null|string>(itemTokenFromLocalStorage||null)

  const [loggedPath,setLoggedPath] = useState()

const usernameInputRef = useRef<any>()
const passwordInputRef = useRef<HTMLInputElement |null|any>()
  const handleLogin =()=>{


    const enteredUsername = usernameInputRef.current.value||'';
    const enteredPasword:string = passwordInputRef.current.value||'';
console.log(enteredUsername)
console.log(enteredPasword)
    


    
  handleLoginUser(enteredUsername,enteredPasword)
   
}
useEffect(()=>{
  if(token !== null){
  localStorage.setItem("token",JSON.stringify(token))
  setItemTokenFromLocalStorage(JSON.parse(localStorage.getItem('token')))
  
}

},[token])     
    return(
      
    
<main>{token !== null && <NotesPage params={{
        category: ''
      }}/>}{token === null &&
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

           <div className={styles.login__inputs}>
              <div className={styles.login__box}>
                 <input type="email" placeholder="Email ID" required className={styles.login__input} ref={usernameInputRef}  />
                 <i className="ri-mail-fill"></i>
              </div>

              <div className={styles.login__box}>
                 <input type="password" placeholder="Password" required className={styles.login__input}  ref={passwordInputRef} />
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

<Link href={`${''}`}>
           <button  className={styles.login__button} onClick={handleLogin}>Login</button>
           </Link>
           <div className={styles.login__register} >
              Don't have an account? <a href="#">Register</a>
           </div>
     </div>
    
     </div>}
     </main>
    )
}
export default LoginComponent