import React from 'react'

const ComboBox = ({value, onChange}) => {
  return (
    <div>
        <select name="" id="" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="completed" >Completed</option>
            <option value="ALL">ALL</option>
            <option value="in_progress">In pro</option>
            <option value="pending">pending</option>

        </select>
      
    </div>
  )
}

export default ComboBox
