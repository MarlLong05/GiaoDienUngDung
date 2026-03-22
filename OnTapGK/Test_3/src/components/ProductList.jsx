import React from 'react'
import { useEffect } from 'react'
import { useState , useRef} from 'react'
import { UseFetchData } from '../hooks/UseFetchData'
import { useMemo } from 'react'
import { useCallback } from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {

    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const inputRef = useRef(null)
    const [filter, setFilter] = useState("all");
    const categories = [...new Set(products.map((p) => p.category))];



    useEffect(()=> {
        const getData = async ()=>{
            try {
                const data = await UseFetchData()
                setProducts(data)
                setLoading(false)
            }finally {
                setLoading(false)
            }
        }
        getData()
        if(inputRef.current){
            inputRef.current.focus()
        } 
    }, [])


    const headleSearch = useMemo(() =>{
        return products.filter((e) =>
              e.name.toLowerCase().includes(search.toLowerCase())  &&
        (filter == "all" ? true : e.category.toLowerCase() === filter.toLowerCase())
        )
    },[products, search,filter ] )




    const handleDelete = useCallback((id)=>{
        setProducts(prev => prev.filter((p) =>p.id !== id))

    }, [])

    if(loading) return <p>Loading...</p>

  return (
    <div>
        <label htmlFor="search">Search</label>
        <input type="text" ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} />

        <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
             <option value="all">All</option>
                {categories.map((category) => {
                     return <option key={category} value={category}>{category}</option>;
        })}
        </select>
        
        
        <h2>Danh sach san pham</h2>
        <ul className='grid'>
            { 
          headleSearch.map((e)=> (
           <div key={e.id}>
             <ProductItem products={e} onDelete={handleDelete}>
            </ProductItem>
           </div>
          ))  
        }
        </ul>
    </div>
  )
}

export default ProductList
