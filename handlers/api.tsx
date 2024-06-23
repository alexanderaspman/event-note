import {ClockworkNotes,ClockworkCategorisedNotes} from '@/lib/types'
import { cookies } from 'next/headers';


interface Data{
  data:ClockworkNotes[]
  update:ClockworkCategorisedNotes[]
  }
  export async function getServerSideProps<GetServerSideProps>({ req}:any, {res}:any) {
    const token = req.cookies.token;
    if (token) {
      
    }
    return { props: {token} };
  }

export  async function  fetchFunctionHandler<getServerSideProps>(){
  const allCookies = cookies();
  const token = allCookies.get('token');

  const headers = {
      "Authorization":("Bearer " + await token),
       'Content-Type': 'application/json'
   
     };
   
     const options = {
  
      method: 'GET',
      headers,
     }
    
  const response = await fetch("http://localhost:3003/api/product", options)
  const responseUpdate = await fetch("http://localhost:3003/api/update", options)
  const data:Data = await response.json()
  const update:any = await responseUpdate.json()
  
  return {props:
    {
      data:data.data
    
    ,
      update:update.data
    }}
  }
  
 
  export  async function signUpNewUser(email:any,password:any) {
    const allCookies = cookies();
    const token = allCookies.get('token');
  
    const newUser:User={
      name:email,
      password:password
    }
    
  const headers = {
     'Content-Type': 'application/json'
 
   };
 
   const options = {

    method: 'GET',
    headers,
    body:JSON.stringify(newUser)
   }
  
const response = await fetch("http://localhost:3003/user", options)
const signUpUser:any = await response.json()

    
  }
  
  


  export  function handleLoginUser<getServerSideProps> (enteredUsername:string,enteredPasword:string)  {


    const newLogin: User = {
      name: enteredUsername,
      password: enteredPasword,
     
       
    }
    const documentUrl = `http://localhost:3003/signin`
    const headers = {
     //"Authorization":("Bearer " + token),
      'Content-Type': 'application/json'
  
    };
  
    const options = {
  
      method: 'POST',
      headers,
     
    body: JSON.stringify(newLogin)
    };
    
    const data =  fetch( `${documentUrl}`, options).then(response => response.json()).then((data)=>{const token = data.token ; localStorage.setItem('token', JSON.stringify(token));} )
    
    .catch(error => console.error('Error:', error))
console.log(data)
  return{props:{data:data}}
  
  

};