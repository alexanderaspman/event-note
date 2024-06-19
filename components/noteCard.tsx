import { ClockworkNotes ,ClockworkCategorisedNotes} from "@/lib/types"
import Image from "next/image"

type NoteProps ={
  note:ClockworkNotes
    //updates:ClockworkCategorisedNotes[]
}
export default async function NoteCard({note}:NoteProps) {
//console.log("updatedNote",updatedNotes)
//const categoryNote:any =  fetchUpdateFunctionHandler(`http://localhost:3003/api/update/${updatedNotes.id}`)
//const update:ClockworkCategorisedNotes[] = await (await categoryNote)

//console.log("categoryNote",categoryNote)
//console.log("update",update)
  return (
    <section className="h-[380px w-[500]]">
      <Image src={note.image} alt={note.name}  width={50} height={50}/>
      <h2>{note.name}</h2>
    <div>
        
   
    </div>
</section>
  )
}
