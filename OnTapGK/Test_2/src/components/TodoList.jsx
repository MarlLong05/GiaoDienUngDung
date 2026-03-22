import React from 'react'

const TodoList = ({data}) => {
  return (
    <div>
        {
        data.map((e)=> (
                <div key={e.id}>Name: {e.name} and Status: {e.status}</div>
            )           
            )
        }
      
    </div>
  )
}

export default TodoList
