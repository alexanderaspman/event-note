"use client"

import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { motion } from "framer-motion"
const routes = [
    {
        name : "Home",
        path:"/"

    },{ 
        name : "All notes",
        path:"/notes/all"

    },
    { 
        name : "Login",
        path: "/login"

    },
]

const Header = () =>{
const activePathnamn = usePathname()


console.log(activePathnamn)
    return(<header className="flex items-center justify-between botder-b border-white/10 h-14 px-3 sm:px-9 ">
        <Logo/>
        <nav className="h-full">
            <ul className="flex gap-x-6 h-full text-sm">
              {routes.map((route)=>(
                <li key={route.path} className={clsx(" hover:text-white relative transition flex items-center",{
                    "text-white":activePathnamn===route.path,
                    "text-white/50": activePathnamn!==route.path})}>
<Link href={route.path}>

{route.name}
</Link>{ activePathnamn === route.path &&
<motion.div layoutId="header-active-link" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
}
</li> ))}
                </ul>
        </nav>
    </header>)
}
export default Header