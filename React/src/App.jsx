import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard.jsx'
import Button from './components/Button.jsx'
import Login from './components/Login.jsx'
import ProductList from './components/ProductList.jsx'
import Alert from './components/Alert.jsx'

function App() {
  return (
   <div className='products'>
     <ProductCard /> <br />
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button> 
      <Login></Login> 
      <ProductList></ProductList>
      <Alert></Alert>

   </div>
  )
}

export default App
