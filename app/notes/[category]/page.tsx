import H1 from "@/components/h1"
import NoteList from "@/components/noteList"
import { fetchFunctionHandler} from '@/handlers/api'
import {ClockworkCategorisedNotes, ClockworkNotes} from '@/lib/types'

type NotesPageProps={
    params:{category:string}
}
type Props = {
    data:any|any[]
    update:any|any[]
}

const NotesPage = async ({params}:NotesPageProps) =>{

    const res=fetchFunctionHandler() 

    
    
 const {data,update}:Props = (await(await res).props)||[]
console.log("data",data)

const category = params.category


    return(<main className="flex flex-col items-center"><H1>
        {category === "all" && "All notes"}
        {category !== "all" && `Notes in category ${category.charAt(0).toUpperCase()+ category.slice(1)}`}
        </H1>
      {<NoteList notes={data} />
      }
        </main>)
}
export default NotesPage