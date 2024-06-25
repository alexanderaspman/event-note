"use client"

import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { motion } from "framer-motion"
import {  useState } from "react"

type Props = {
    data:any|any[]
    update:any|any[]
}
const Header = ({data,update}:any) =>{
    console.log("data",data)
    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "All notes",
            path: "/notes/all"
        },
        [
            { name: "Create category", path: "/create-category" },
            { name: "Create post", path: "/create-post" },
        ],
        {
            name: `${data === null ?"Login":"Logout"}`,
            path: "/login"
        },
    ];
   
    
  function mapRoutes(routes: any[]) {
   
        return routes.map(route => {
            if (Array.isArray(route)) {
                return route.map( subRoute => {
                    
                    { 

                       
                      

                        if (data === undefined && subRoute.name === "Create post") {
                   
                            return null;
                        }
                  else
                        return{
                    name: subRoute.name,
                    path: subRoute.path
           }     }});
            } else {
                return {
                    name: route.name,
                    path: route.path
                };
            }
        }).flat(); // Flatten the array to handle nested arrays
    }
    
    const mappedRoutes = mapRoutes(routes);
  
        const newArray = mappedRoutes.filter(item => item !== null);

    console.log(mappedRoutes);
const activePathnamn = usePathname()


    return(<header className="flex items-center justify-between botder-b border-white/10 h-14 px-3 sm:px-9 ">
        <Logo/>
        <nav className="h-full">
            <ul className="flex gap-x-6 h-full text-sm">
              {newArray.map((route:string|string[]|any)=>{
       
                return(
                <li key={route.path} className={clsx(" hover:text-white relative transition flex items-center",{
                    "text-white":activePathnamn=== route.path,
                    "text-white/50": activePathnamn!==route.path})}>
<Link href={route.path}>

{route.name}
</Link>{ activePathnamn === route.path &&
<motion.div layoutId="header-active-link" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
}
</li> )})}
                </ul>
        </nav>
    </header>)
}
export default Header