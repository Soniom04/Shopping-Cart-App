import { useEffect, useState } from "react"
import Spinner from "../Components/Spinner"
import Product from "../Components/Product"

export default function Home(){
const API_URL = "https://fakestoreapi.com/products"
const [loading,setLoading] = useState(false)
const [items,setItems] = useState([])

async function fetchitemsData(){
    setLoading(true)
    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setItems(data)
    } 
    catch (error) {
        console.log(error + "Got this error")
        setItems([])
    }
    setLoading(false)
}

useEffect(()=>{
    fetchitemsData()
},[])

    return (
        <div className="flex justify-center">
            {
                loading ? <Spinner className="mt-44 h-full"/> :
                items.length === 0 ? <div className="flex justify-center items-center text-lg">No items Found</div>:
                <div className="grid xs:grid-small-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto gap-x-5 mt-10 gap-y-10">
                    {
                        items.map(item =>(
                            <Product item = {item} key = {item.id}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}