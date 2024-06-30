
import CreateCategoryPost from "@/components/createCategoryPost";
import CreatePostForm from "@/components/createPostForm";
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
type CreatePostProps={
  data:string|[]
}
export default async function CreatePostPage() {

    const allCookies = cookies();
    const token = allCookies.get('token');
  
    const headers = {
        "Authorization":("Bearer " + token?.value ),
         'Content-Type': 'application/json'
     
       };
     
       const options = {
    
        method: 'GET',
        headers,
       }
      
    const response = await fetch("http://localhost:3003/api/product", options)
    const data:any|any[]|null = await response.json()||null
const text = "Dont seem like you have created a category, do this before this page is enabled"
  return (
<main className="flex flex-col items-center pt-36 px-3 pr-36">
  {data !== null && <CreatePostForm data={data}/>}

<div className="fixed top-24  text-right">
<H1>{data !== null ? "First choose a category":"First Create a category"}</H1>

        {data === null && <div className="mt-10 justify-items-spacebetween"> <CreateCategoryPost/> {text} </div>}
</div>
</main>
)
}

