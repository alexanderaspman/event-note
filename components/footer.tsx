import Link from "next/link"

const routes = [
    {path:'/terms-condition',
    name:'Terms & Conditions'
    },
    {path:'/privacy-policy',
    name:'Privacy Policy'
    },
]

const Footer = () =>{
    return(<footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-white/25">
        <small className="text-xs">&copy; alexanderaspman.se. All rights reservered </small>

        <ul className="flex gap-x-3 sm:gap-8">
            {routes.map((routes)=>(
                <li key={routes.path}>
<Link href={routes.path}>{routes.name}</Link>
                </li>
            ))}
        </ul>
    </footer>)
}
export default Footer