import Image from "next/image"
import Link from "next/link"
export default function Logo() {
  return (
  <Link href={"/"}><Image  className=" mt-3"
  src="https://res.cloudinary.com/doxjwirzp/image/upload/v1718320852/iegnmf3dsvhydikrrf1g.jpg" 
  alt="Note loggo "
   width={46} 
   height={12}/></Link>
  )
}
