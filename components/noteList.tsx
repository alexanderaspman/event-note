import {ClockworkNotes,ClockworkCategorisedNotes} from '@/lib/types'
import NoteCard from './noteCard'

export default function NoteList<getStaticProps>({notes}:any|any[]) {
  const imageIdea = `https://res.cloudinary.com/doxjwirzp/image/upload/v1718624333/wqmkjccie112znht5upn.jpg`;
  const imageFunny = `https://res.cloudinary.com/doxjwirzp/image/upload/jq5xhj4rzraoqukyqahb.jpg`;
  const imagework = `https://res.cloudinary.com/doxjwirzp/image/upload/tgvong3adan9k0lkgpbw.jpg`;
  
  
  const updatedNotes:ClockworkNotes = notes !== null ? []: notes.map((note:ClockworkNotes) => {
    if (note.name === "ideas") {
      return {...note ,image: imageIdea };
    }
    if ( note.name === "funny"){
      return{...note, image:imageFunny}
    }
    
    if ( note.name === "work"){
      return{...note,image:imagework}
    }
    return note;
  })  ;
    
  return  (
    <div>
   { updatedNotes.map((note:ClockworkNotes)=>{


  
  
    return  <NoteCard key={note.id} note={note} />
   })}</div>
   )
  
}

