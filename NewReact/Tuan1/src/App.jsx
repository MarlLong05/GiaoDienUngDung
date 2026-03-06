
import './App.css'
import ProductCard from './components/ProductCard'
import Button from './components/Button'
import Alert  from './components/Alert'
import { useState } from 'react'

function App() {
  const [type, setType]  = useState("success")

  return (
    <>
    {/* <ProductCard/>  */}
    {/* <div>
      <Button type="primary" >Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success"> Success</Button>

    </div> */}



     <div className="container"> 
      
        <Alert type={type} />
          <div className="button-group">
            {/* Cách 1 */}

          {/* <button onClick={() => setType("success")}>Success</button>
          <button onClick={() => setType("warning")}>Warning</button>
          <button onClick={() => setType("error")}>Error</button> */}

          {/* Cach 2 */}
          
          {/* {["success", "waring", "error"].map((item) => 
            <button key={item} onClick={() => setType(item)}>
              {item}
            </button>
          )} */}

          {["success", "warning", "error"].map((item) => 
            <button key={item} onClick={() => setType(item)} className={type === item ? "acctive": ""}>
              {item}
            </button>
          )}




      </div>
     

    


      </div>



    </>
  )
}

export default App
