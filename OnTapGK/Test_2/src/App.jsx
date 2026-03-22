import React from 'react'
import useFetchData from './useFetchData'
import { useState , useRef} from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import ComboBox from './components/ComboBox'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import { useCallback } from 'react'


const App = () => {
  const [search, setSearch] = useState("") 
  const [status, setStatus] = useState("ALL")
  const inputRef = useRef(null)
  
  const { data, loading, error } = useFetchData("/Data.json")

      useEffect(()=>{
        if(inputRef.current){
          inputRef.current.focus()
        }
      },[loading])

    const handleSearch = useCallback((e) =>{
      setSearch(e)
    },[])


    const handleChange = useCallback((e) =>{
      setStatus(e)
    },[])

      const hienThiData = useMemo(()=>{
        return data.filter((e)=>
          e.name.toLowerCase().includes(search.toLowerCase()) && (status === "ALL" || e.status === status)
      )
      }, [search,data,status])

      if(error) return <div>Loi: {error}</div>

  return (
    <div>
      <SearchBar value={search} inputRef = {inputRef} onChange={handleSearch}  />
      <ComboBox value={status} onChange={handleChange} />
      {
        loading ? <p>Loading</p> : <TodoList data={hienThiData} /> 
      }

    </div>
  )
}
export default App
