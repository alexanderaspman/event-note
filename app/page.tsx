
import SearchForm from "@/components/searchForm";
import { ClockworkNotes } from "@/lib/types";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
type PropsData = {
  data:ClockworkNotes[]
}
export default async function Home() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0ZGYxNmNjLTkyYTUtNGNjNC04NzMyLWJmN2U5YTdjMGEwZSIsIm5hbWUiOiJrb250YWt0QGFsZXhhbmRlcmFzcG1hbi5zZSIsImVtYWlsIjpudWxsLCJpYXQiOjE3MTg2NjQ1NDR9.i4jKsXmVOc1Uck8XEOLxWaZ-nRebRCVvwwWv2-rCxms"

    const headers = {
        "Authorization":("Bearer " + token),
         'Content-Type': 'application/json'
     
       };
     
       const options = {
    
        method: 'GET',
        headers,
       }
  const response = (await fetch("http://localhost:3003/api/product", options))
  const data:PropsData = await response.json()
  console.log("data",data.data)
  console.log("reponse",response)
  return (
    <main className="flex flex-col items-center pt-36 px-3 pr-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">Take notes and remember </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">Browse between <span className="font-bold underline italic text-accent">all your notes</span></p>

      <SearchForm/>
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>
          Popular:
        </p>
       <div className="space-x-2 font-semibold">
        {data.data.map(((note: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=>{
          return(
          <div key={note.id}>{note.name}</div>
        )}))}
          <Link href={"notes/work"}>Work</Link>
          <Link href={"notes/funny"}>Funny</Link>
          <Link href={"notes/ideas"}>Ideas</Link>
          </div>
      </section>
    </main>
  )
}
