import {ClockworkNotes,ClockworkCategorisedNotes} from '@/lib/types'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0ZGYxNmNjLTkyYTUtNGNjNC04NzMyLWJmN2U5YTdjMGEwZSIsIm5hbWUiOiJrb250YWt0QGFsZXhhbmRlcmFzcG1hbi5zZSIsImVtYWlsIjpudWxsLCJpYXQiOjE3MTg2NjQ1NDR9.i4jKsXmVOc1Uck8XEOLxWaZ-nRebRCVvwwWv2-rCxms"

export const fetchFunctionHandler = async (src:string,srcUpdate:string) =>{
interface Data{
data:ClockworkNotes[]
update:ClockworkCategorisedNotes[]
}
const headers = {
    "Authorization":("Bearer " + token),
     'Content-Type': 'application/json'
 
   };
 
   const options = {

    method: 'GET',
    headers,
   }
  
const response = await fetch(src, options)
const responseUpdate = await fetch(srcUpdate, options)
const data:Data = await response.json()
const update:any = await responseUpdate.json()

return {props:
  {
    data:data.data
  
  ,
    update:update.data
  }}

}

export const fetchUpdateFunctionHandler = async (srcUpdate:string) =>{
  interface Data{
  data:ClockworkCategorisedNotes[]
  }
  const headers = {
      "Authorization":("Bearer " + token),
       'Content-Type': 'application/json'
   
     };
   
     const options = {
  
      method: 'GET',
      headers,
     }
    
  const response = await fetch(srcUpdate, options)
  const data:Data = await response.json()
  
  return {data:data.data}
    
    
    
  
  }