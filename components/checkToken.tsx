
import { useEffect, useState } from 'react'

export default async function CheckToken() {
    const [itemTokenFromLocalStorage,setItemTokenFromLocalStorage] = useState()

    useEffect( ()=>{
        setItemTokenFromLocalStorage( JSON.parse(localStorage.getItem('token')))
    },[itemTokenFromLocalStorage])
  return itemTokenFromLocalStorage
}
