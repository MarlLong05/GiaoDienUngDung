import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { UseFetchData } from '../UseFetchData'
import ProductItem from './ProductItem'

const ProductList = () => {
    const [products, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 
    const inputRef = useRef(null)
    const [filter, setFilter] = useState("all")
    const categories = [...new Set((products || []).map((p) => p.category))];
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const data = await UseFetchData()
                console.log(data)
                setProduct(data)
                setLoading(false)   
            } catch (error) {
                setError(error.message)
                
            } finally{
                setLoading(false)
            }
        }
        getData()

        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

    const handleSearch = useMemo (()=>{
        return products.filter((e) =>(
            e.name.toLowerCase().includes(search.toLowerCase()) && 
            (filter === 'all' ? true : e.category.toLowerCase() === filter.toLowerCase())
        ))
    }, [search, products, filter])


    const handleDelete = useCallback((id)=>{
        setProduct(prev => prev.filter((p) => p.id !== id))
    }, [])


    if(error) return <p>Loi: {error}</p>
    if(loading) return <p>Loading...</p>


  return (
    <div>
        <label htmlFor="search"> Search</label>
      <input type="text" value={search} placeholder='Nhap name' ref={inputRef} onChange={(e) => setSearch(e.target.value)} />
    
        <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            {categories.map((e)=>{
                return <option value={e} key={e} >{e}</option>
            })}
        </select>
         <ul className="grid">
        {handleSearch.map((product) => {
          return (
            <ProductItem key={product.id} products={product} onDelete={handleDelete}>
              Sản phẩm
            </ProductItem>
          );
        })}
      </ul>


    </div>
  )
}

export default ProductList