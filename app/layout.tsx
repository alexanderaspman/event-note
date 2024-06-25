import type { GetServerSideProps, Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { cookies } from 'next/headers'
import { ClockworkCategorisedNotes, ClockworkNotes } from '@/lib/types'
import { fetchFunctionHandler } from '@/handlers/api'

const inter = Inter({ subsets: ['latin'] })

interface Data{
  data:ClockworkNotes[]
  update:ClockworkCategorisedNotes[]
  }
export const metadata: Metadata = {
  title: 'Notes',
  description: 'Notes and such',
  
}
export async function fetchDataRoot(){

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
  
  // Pass data to the page component as props
 


export default function RootLayout({data,update,
  
}:any,
 children:React.ReactNode
) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
        <Header data={data} update={update}/>
        {children}
        <Footer />
        </Container>
        </body>
    </html>
  )
}
