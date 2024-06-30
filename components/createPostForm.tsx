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
export default function CreatePostForm({data}:any) {
    const [categoryName,setCategoryName] = useState('Choose category')
    const [categoryId,setCategoryId] = useState('')
  return (<>
   
        <Menu>
          <MenuButton className="inline-flex items-center gap-12 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          {categoryName}
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          > {data.data.map((value:ClockworkNotes)=>{
            const categoryHandler =()=>{
                setCategoryName(value.name)
                setCategoryId(value.id)
            }
            return(<MenuItem key={value.id}>
            
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <PencilIcon className="size-4 fill-white/30" />
            <div onClick={categoryHandler}> {value.name}</div>
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
              </button>
            </MenuItem>)})}
                  
                  
          </MenuItems>
          </Menu>
          
        {categoryName}
        {categoryId}
       </>  
          
  )
}