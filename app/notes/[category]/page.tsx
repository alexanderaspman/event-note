import H1 from "@/components/h1"
import NoteList from "@/components/noteList"
import {fetchFunctionHandler} from '@/handlers/fetchFunctionHandler'
import {ClockworkCategorisedNotes, ClockworkNotes} from '@/lib/types'

type NotesPageProps={
    params:{category:string}
}
type Props = {
    res:ClockworkNotes|ClockworkCategorisedNotes
}

const NotesPage = async ({params}:NotesPageProps) =>{
    const res = fetchFunctionHandler(`http://localhost:3003/api/product`,`http://localhost:3003/api/update`)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0ZGYxNmNjLTkyYTUtNGNjNC04NzMyLWJmN2U5YTdjMGEwZSIsIm5hbWUiOiJrb250YWt0QGFsZXhhbmRlcmFzcG1hbi5zZSIsImVtYWlsIjpudWxsLCJpYXQiOjE3MTg2NjQ1NDR9.i4jKsXmVOc1Uck8XEOLxWaZ-nRebRCVvwwWv2-rCxms"

    const headers = {
        "Authorization":("Bearer " + token),
         'Content-Type': 'application/json'
     
       };
     
       const options = {
    
        method: 'GET',
        headers,
       }
      
    const response = await fetch("http://localhost:3003/api/product", options)
    const responseUpdate = await fetch("http://localhost:3003/api/update", options)
    const notes = await response.json()
    const updated = await responseUpdate.json()
    
    
    
    
    
   const {data,update} = ((await res).props)


const category = params.category

console.log("notes",notes)
console.log("update",update)

    return(<main className="flex flex-col items-center"><H1>
        {category === "all" && "All notes"}
        {category !== "all" && `Notes in category ${category.charAt(0).toUpperCase()+ category.slice(1)}`}
        </H1>
      {<NoteList notes={notes.data} />
      }
        </main>)
}
export default NotesPage