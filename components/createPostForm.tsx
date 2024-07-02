"use client"
import CreateCategoryPost from "@/components/createCategoryPost";
import H1 from "@/components/h1";
import { ClockworkNotes } from "@/lib/types";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { cookies } from "next/headers";
import Link from "next/link";
import { useState } from "react";

 type FormValuesProps ={
  categoryId:string
  title:string
  body:string
  importance?:string
}
export default function CreatePostForm({data}:any) {
    const [categoryName,setCategoryName] = useState<string>('category')
    const [categoryId,setCategoryId] = useState('')
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [importance,setImportance] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [errors,setErrors] = useState<string[]>([]);


    const onSubmitForm = async () =>{
      const postData:FormValuesProps ={
        categoryId: categoryId,
        title: title,
        body:body
      } 
    }
  return (<form onSubmit={onSubmitForm} className="flex flex-col">
   {
  errors.length > 0 && (<ul>{errors.map((error)=>(<li key={error} className="bg-red-100 text-red-500 px-4 py-2 rounded">{error}</li>))}</ul>)
}
  <div className="flex flex-col ">
    <div className="flex flex-row  " >
  <div className="flex flex-row w-[100%] mr-10" >
    <input disabled={disabled} type="text" className="w-[100%] inline-flex  disabled:text-gray-400 h-16 rounded-r-none rounded-md bg-white/[7%] font-bold from-sky-500 p-4 inline-flex place-items-center" value={categoryName} placeholder="category"/>
        <Menu>
          <MenuButton className="inline-flex items-center gap-12 rounded-md rounded-l-none h-[60%] bg-white/[7%] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            
            <ChevronDownIcon className="size-10 fill-white/60" />
          </MenuButton>
         
          <MenuItems
            transition
            anchor="right"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          > {data !==null && data.data.map((value:ClockworkNotes)=>{
            const categoryHandler =()=>{
                setCategoryName(value.name)
                setCategoryId(value.id)
                setDisabled(false)
            }
            return(<MenuItem  key={value.id}>
            
              <button onClick={categoryHandler} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <PencilIcon className="size-4 fill-white/30" />
            <div > {value.name}</div>
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
              </button>
            </MenuItem>)})}
                  
                  
          </MenuItems>
          </Menu>
          </div>
          <input value={importance} onChange={e=>setImportance(e.target.value)} type="text" className="w-[100%] h-16 rounded bg-white/[7%]  mb-10 font-bold from-sky-500 p-4 inline-flex place-items-center gap-4" placeholder="importance 1-5"/>

     
     
      </div>
      <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="w-[100%] h-16 rounded  bg-white/[7%]   mb-10 font-bold from-sky-500 p-4 inline-flex place-items-center gap-4"  placeholder="title"/>
      <textarea value={body} onChange={e=>setBody(e.target.value)} className="w-[100%] min-h-80 rounded bg-white/[7%]  mb-10  font-bold from-sky-500 p-4 inline-flex place-items-center gap-4"  placeholder="body"/>
       </div>  
       <div className="flex flex-col  items-baseline">
       <button type="submit" className="bg-slate-700 px-4 h-10 ">submit</button>
       </div>
       </form>  
          
  )
}