import { ClockworkCategorisedNotes, ClockworkNotes } from "@/lib/types";

 export const   baseURL= 'https://localhost:3003/'
 type ProductProps ={
    name:string
 }
  
  export async function getProducts() {
   const req= await fetch(`${baseURL}/api/product`)
   const res =await req.json() 
   return res;
  }
  export async function getUpdates(enteredProductName: any) {
    
    const newProduct: ProductProps = {
        name: enteredProductName
        
       
         
      }
      const headers = {
        'Content-Type': 'application/json'
    
      };
    
      const options = {
    
        method: 'POST',
        headers,
       
      body: JSON.stringify(newProduct)
      };
   const req= await fetch(`${baseURL}/api/update`,options)
   const res =await req.json() 
   return res;
  }
  
  export function postProduct(note:ClockworkNotes,update:ClockworkCategorisedNotes) {
    
    
  }