
import { useEffect, useMemo, useState,  useRef } from 'react'
import './App.css'

function App() {

  const [products, setPro] = useState([])
  const [search, setSearch] = useState("") 
  const [error, setErr] = useState(null)
  const inputRef = useRef() 


  useEffect(()=>{
    const getProducts = async ()=>{
        try{
          const res = await fetch("/products.json") ;
          if(!res.ok) throw new Error("Loi chua tim thay dl") ; 
          const data = await res.json() ; 
          setPro(data)
          console.log(data)

          localStorage.setItem(`products`, JSON.stringify(data))
        }catch(error){
          setErr(error.message)
        }
    } 
    getProducts(); 
    
  },[])

  useEffect(()=>{
      inputRef.current.focus() ;

  },[])

  const filterSearch = useMemo(() =>{
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }, [products, search])



  return (
    <>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Nhap title can tim'/>
    {error && <p>{error}</p> }
    {filterSearch.map((e)=>{
      return <div key={e.id}>Title: {e.title} <br /> price: {e.price}</div>
    })}
        
    </>
  )
}

export default App
