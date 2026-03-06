import React, { useState } from 'react'
import './StatusBadge.css'
const StatusBadge = () => {

    const [a, b]  = useState("online")

  return (
    <div>
        <h2 className= {a.toLowerCase()}>
            {
                a
            }
        </h2>
        <div  className='btnClick'>
        <button  className={a === "online" ? "active online" : ""} 
                onClick={() => b("online")} >Online</button>
        
        <button className={a === "off" ? "active off" : ""}
                onClick={() => b("off")}
                >OffLine</button>

        <button className= {a === "bus" ? "active busy" : ""}
                onClick={() => b("bus")}>Busy</button>
        </div>

    </div>
  )
}

export default StatusBadge