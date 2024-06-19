"use client"
import React, { useEffect, useState } from 'react'
import { baseURL } from './apiClient';
type UserProps ={
    name:string
    password:string
}
interface ResponseData {
    data:UserProps
}
export default function useClient() {
    const [itemTokenFromLocalStorage,setItemTokenFromLocalStorage] = useState()

const[token,setToken]=useState(null||'')
    const refreshToken = async () => {
        try {
            const user: UserProps = {
                name: '',
                password:''
                
               
                 
              }
            const headers = {
                'Content-Type': 'application/json'
            
              };
            
              const options = {
            
                method: 'POST',
                headers,
               
              body: JSON.stringify(user)
              };
          const response= await fetch(`${baseURL}/signin`,options);
          const data
           = await response.json()
          const newToken =  data.token;
          setToken(newToken);
          localStorage.setItem('token', newToken);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
        // Check if the token has expired or is near expiration
        localStorage.setItem("token",JSON.stringify(token))
        setItemTokenFromLocalStorage(JSON.parse(localStorage.getItem('token')))
      }, [token]);
  
}


