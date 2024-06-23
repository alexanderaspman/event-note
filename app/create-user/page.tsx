

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateUserPage = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
style={{color:'black'}}             
 type="text"
              value={name}
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
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
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