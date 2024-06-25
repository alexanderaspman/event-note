import H1 from "@/components/h1"
import NoteList from "@/components/noteList"
import { fetchFunctionHandler} from '@/handlers/api'
import {ClockworkCategorisedNotes, ClockworkNotes} from '@/lib/types'
import { cookies } from "next/headers"

type NotesPageProps={
    params:{category:string}
}
type Props = {
    data:any|any[]
    update:any|any[]
}

const NotesPage = async ({params}:NotesPageProps) =>{
    const allCookies = cookies();
    const token = allCookies.get('token');
  
    const headers = {
        "Authorization":("Bearer " + token.value ),
         'Content-Type': 'application/json'
     
       };
     
       const options = {
    
        method: 'GET',
        headers,
       }
      
    const response = await fetch("http://localhost:3003/api/product", options)
    const data:any = await response.json()
    

const category = params.category


    return(<main className="flex flex-col items-center"><H1>
        {category === "all" && "All notes"}
        {category !== "all" && `Notes in category ${category.charAt(0).toUpperCase()+ category.slice(1)}`}
        </H1>
      {<NoteList notes={data.data} />
      }
        </main>)
}
export default NotesPage