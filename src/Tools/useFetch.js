import { useState, useEffect } from "react";
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        axios
        .get(url, { signal: abortCont.signal })
        .then(res => {
            if (res.statusText !== "OK"){
                throw Error("could not fetch the data for that resource")
            }else{
                setData(res.data)
                setIsPending(false)
                setError(null)
            }
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false)
                setError(err.message);
            }
        })
        return () => abortCont.abort()
    }, [url])

    return { data, isPending, error}
}
 
export default useFetch;