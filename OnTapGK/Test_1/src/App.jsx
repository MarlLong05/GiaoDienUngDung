import '../Data.json'
import { useState, useEffect, useMemo, useRef } from 'react';
import './App.css'
import ComboBox from './components/ComboBox'
import SearchBar from './components/SearchBar'
import TodoList from './components/TodoList'

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("ALL")
  const inPutRef = useRef(null)

  useEffect(()=>{
    fetch("/Data.json")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
    if(inPutRef.current){
       inPutRef.current.focus()
    }
  }, [])


  const locData = useMemo(() => {
    return products.filter(e => // name thì tùy vào DAta mà thay đổi 
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "ALL" || e.status === status)
    )
  }, [products, search, status])



  return (
    <>
    <div className="Name">
      <SearchBar value={search} onChange={setSearch} inputRef={inPutRef} /> 
      <ComboBox value={status} onChange={setStatus} />
       <TodoList data={locData} /> 
    </div>
     
    </>
  )
}

export default App
