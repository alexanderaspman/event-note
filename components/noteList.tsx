import {ClockworkNotes,ClockworkCategorisedNotes} from '@/lib/types'
import NoteCard from './noteCard'
import { Key, useState } from 'react'
import image from 'next/image'
type NoteProps = {
    notes:ClockworkNotes[]
    //updates:ClockworkCategorisedNotes[]
}
export default function NoteList({notes}:any|any[]) {
  const imageIdea = `https://res.cloudinary.com/doxjwirzp/image/upload/v1718624333/wqmkjccie112znht5upn.jpg`;
  const imageFunny = `https://res.cloudinary.com/doxjwirzp/image/upload/jq5xhj4rzraoqukyqahb.jpg`;
  const imagework = `https://res.cloudinary.com/doxjwirzp/image/upload/tgvong3adan9k0lkgpbw.jpg`;
  
  /*const updatedNotes = notes.map((note:ClockworkNotes) => {
    if (note.name === "ideas") {
      return { ...note, image: imageIdea };
    }
    if ( note.name === "funny"){
      return{...note, image:imageFunny}
    }
    
    if ( note.name === "work"){
      return{...note, image:imagework}
    }

    
    return note;
  });
  console.log(updatedNotes)
  */

  return  (
    <div>
   { notes.map((note: { [x: string]: any; id: any; name?: string; createdAt?: string; belongsToId?: string; images?: string | undefined })=>{

   
  
    
      
    return(
    
    <NoteCard key={note.id} note={note} />
   )})}</div>
   )
  
}

