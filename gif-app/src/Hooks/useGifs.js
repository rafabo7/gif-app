import { useState } from "react";
import { fetchGifs } from "../Services/fetchGifs";

export function useGifs ( { search }){
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState(null)

    const getGifs = async ({ search }) => {
        setLoading(true)

        const newGifs = await fetchGifs({ search })
        setGifs(newGifs)
        setLoading(false)
    }

return {gifs, loading, getGifs}

}