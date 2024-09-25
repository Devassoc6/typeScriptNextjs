"use client"

import { axiosGet } from "@/utils/axiosFunctions/axiosGet"
import { useEffect, useState } from "react"

type ResponseType = {
    userId?: number
    id?: number
    title?: string
    body?: string
}

const Bouquet: React.FC = () => {
    const [data, setData] = useState<ResponseType[]>([])

    useEffect(() => {
        ;(async () => {
            const res = await axiosGet<ResponseType[]>({
                url: "https://jsonplaceholder.typicode.com/posts",
            })
            setData(res.data)
            // console.log("Itemssssssssksikswsjjsjs", res.data);
        })()
    }, [])

    return (
        <div style={{overflow:"hidden"}}>
            {data.map((value) => (
                 <div key={value.id} style={{overflow:"hidden"}}>
                 <h3>{value.title}</h3>
                 <p>{value.body}</p>
             </div>
            ))}
        </div>
    )
}
export default Bouquet
