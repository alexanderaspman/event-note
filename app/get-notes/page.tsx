import H1 from "@/components/h1"
import NoteList from "@/components/noteList"
import {fetchFunctionHandler} from '@/handlers/api'
import {ClockworkNotes} from '@/lib/types'

type NotesPageProps={
    params:{category:string}
}


const CategoryNotesPage = async ({params}:NotesPageProps) =>{
    const data = fetchFunctionHandler(`http://localhost:3003/api/update/c0899b45-842f-41ed-a2c2-9ae0a55598da`)

    
    
    const notes:ClockworkNotes[] = await (await data)


const category = params.category

console.log("data",data)

    return(<main className="flex flex-col items-center"><H1>
        {category === "all" && "All notes"}
        {//category !== "all" && `Notes in category ${category.charAt(0).toUpperCase()+ category.slice(1)}`
        }
        </H1>
     
        </main>)
}
export default CategoryNotesPage