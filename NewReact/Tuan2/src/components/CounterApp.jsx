import React, { useState } from 'react'
import Button from './../../../Tuan1/src/components/Button';

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const tang = () => {
        setCount(count + 1)
    }
    const giam = () => {
        if(count > 0 ){
            setCount(count -1)
        }
    }
    const reset = () => {
        setCount(0)
    }

  return (
    <div style={{
            margin: "10px",
            padding: "10px"
    }}>
        <h2 style={{
            color: "black"
        }}>
            {count}
        </h2>
        <div className='btnCount'>
        <button onClick={tang}>Tang</button>
        <button onClick={giam}>giam</button>
        <button onClick={reset}>reset</button>
        </div>
    

    </div>
  )
}

export default CounterApp