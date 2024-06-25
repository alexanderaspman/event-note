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
      "Authorization":("Bearer " + await token?.value),
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
  
 
  
