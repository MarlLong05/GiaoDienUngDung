import React from 'react'

const TodoList = ({data}) => {
  return (
    <div>
       {data.map((e)=>(
        <div key={e.id}>{e.name} and {e.status} </div>
       ))}
      
    </div>
  )
}

export default TodoList
