import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error,setError] = useState(null)
    useEffect(()=>{

        const getData = async () =>{
            setLoading(true) 

            try {
                const res = await fetch(url)
                if(!res.ok) throw new Error("loi du lieu")
                const data = await res.json()
                setData(data)
                
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        getData()

    },[url])
  return {data, loading, error}
}

export default useFetchData
