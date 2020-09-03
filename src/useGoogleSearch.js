import { useState, useEffect } from 'react'

const CONTEXT_KEY = "dc44d4a01537dc6ca"
const API_KEY = "AIzaSyCsOgL-dIiowWgFIbG_ZML-zK774HHt2D8"

const useGoogleSearch = (term) =>  {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
             } 
        fetchData()
        }, [term])


    return { data }
}

export default useGoogleSearch
