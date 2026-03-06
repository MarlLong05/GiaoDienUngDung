import React from 'react'
import './Alert.css'
const Alert = ({type}) => {
  return (
    <div className={`alert alert-${type}`}>
        Mau la {type}
    </div>
  )
}

export default Alert