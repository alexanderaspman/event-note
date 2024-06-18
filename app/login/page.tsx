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