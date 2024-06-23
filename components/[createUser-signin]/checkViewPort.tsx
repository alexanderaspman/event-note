
"use client"

import { ReactNode, useEffect, useState } from "react";
import LoginComponent from "../loginComponent";
import CreateUserPage from "../createUserComponent";

type SigninCreateUserProps={
  params:{
login:string
createUser:string}
}
    const CheckViewport =  ({params}:SigninCreateUserProps) => {
        const [width, setWidth] = useState<number|any>()
        const [layout,setLayout]= useState<null|boolean>(null)
        
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
const showParams = params.login
console.log("params",showParams)
    return(<div>

      {showParams}
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
      </div>
    )
  }
  export default CheckViewport
