

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import FormCreateUser from '@/components/formCreateUser';
const CreateUserPage = ({imageLink}:any) => {
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
         
           <FormCreateUser  imageLink={"/24/4/9/3/designer-9.png"} />
         
         </div>
       ) 
        }
     
     
   
        { 
       width > 800 && (
       <div>
      
         <FormCreateUser  imageLink={"/24/4/9/2/designer-8.png"} />
 
      
       </div>)}
      
        </main>
     )
};

export default CreateUserPage;
