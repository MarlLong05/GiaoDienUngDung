import React from 'react'

const ComboBox = ({value, onChange }) => {
  return (
    <div>
        <select name="" id="" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="ALL">ALL</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>
    </div>
  )
}

export default ComboBox
