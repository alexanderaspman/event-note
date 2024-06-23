

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckViewport from '@/components/checkViewPort';
import LoginComponent from '@/components/loginComponent';

const LoginPage = () => {
    const [width, setWidth] = useState<number|any>()
        
    const mobile = 700;
    const tablet = 980;

    const handleResizeWindow = async(width:any)=>{
     
      
        console.log("window.innerWidth", window.innerWidth);
    //set vidth to the screen size of the window
 
  const handleResizeWindow = async() => setWidth(window.innerWidth);         
       window.addEventListener("resize", handleResizeWindow);
  }
    useEffect(() => {  
         setWidth ( window.innerWidth)
        
     
       
    }
, []);
  return (<main>
    {width < 800&&
        (
         <div>
         
           <LoginComponent  imageLink={"/24/4/9/3/designer-9.png"} />
         
         </div>
       ) 
        }
     
     
   
        { 
       width > 800 && (
       <div>
      
         <LoginComponent  imageLink={"/24/4/9/2/designer-8.png"} />
 
      
       </div>)}
      
        </main>
     )
    

   
  
};
 {/*
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
style={{color:'black'}}             
 type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
            style={{color:'black'}}      
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>*/}
export default LoginPage;
/*

import CheckViewport from "@/components/checkViewPort"
import LoginComponent from "@/components/loginComponent"
import Image from "next/image"
import { useEffect, useState } from "react"
import Home from "../page"


const imageLoader = ({ src}:any) => {
    return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
  }
   
const Login = ( imageLink: any) => {

   
    return(
        <main>
            
    {<CheckViewport/>}   
    
        
        </main>
    )
}


export default Login
*/